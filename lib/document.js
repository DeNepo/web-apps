'use strict';

const fs = require('fs');
const path = require('path');

const { cruise } = require('dependency-cruiser');
const { renderGraphFromSource } = require('graphviz-cli');

if (!process.argv[2]) {
  console.log(`please pass a path to document:

npm run document -- path/to/project  `);
  process.exit(0);
}

const ROOT = path.join(__dirname, '..', process.argv[2]);

const IGNORABLE_PATHS = ['.git', 'node_modules', 'slides'];

if (!fs.existsSync(ROOT)) {
  throw new Error(`/${process.argv[2]} is not a path in this directory`);
}

const findCruisablePaths = async (dirPath) => {
  if (IGNORABLE_PATHS.includes(dirPath.split(path.sep).pop())) {
    return [];
  }

  const documentIgnore = fs.existsSync(path.join(dirPath, '.documentignore'));
  const isCruisable = fs.existsSync(path.join(dirPath, 'package.json'));
  if (isCruisable && !documentIgnore) {
    return [dirPath];
  }

  const pathsToCruise = [];

  const contents = fs.readdirSync(dirPath);
  for (const thing of contents) {
    const absThingPath = path.join(dirPath, thing);
    if (fs.lstatSync(absThingPath).isDirectory()) {
      console.log(absThingPath);
      const cruisables = findCruisablePaths(absThingPath);
      pathsToCruise.push(cruisables);
    }
  }

  return Promise.all(pathsToCruise);
};

const cruiseOptions = {
  outputType: 'dot',
  doNotFollow: {
    path: 'node_modules',
  },
  combinedDependencies: true,
  reporterOptions: {
    dot: {
      collapsePattern: '(node_modules/[^/]+|client|public)',
    },
  },
  exclude: '(sandbox.js|(\\S)+.spec.js|dev-scripts|dev.js)',
};

findCruisablePaths(ROOT)
  .then((unflatPaths) => unflatPaths.flat(Infinity))
  .then((paths) =>
    paths
      .map((path) => ({
        path,
        graph: cruise([path], cruiseOptions).output,
      }))
      .forEach((project) =>
        renderGraphFromSource({ input: project.graph }, { format: 'svg' })
          .then((svgGraph) =>
            fs.writeFile(
              path.join(project.path, 'dependency-graph.svg'),
              svgGraph,
              'utf-8',
              (err) => err && console.err(err),
            ),
          )
          .catch((err) => console.error(err)),
      ),
  )
  .catch((err) => console.error(err));
