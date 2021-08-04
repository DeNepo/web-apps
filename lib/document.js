'use strict';

const fs = require('fs');
const path = require('path');

const { cruise } = require('dependency-cruiser');

const { renderGraphFromSource } = require('graphviz-cli');

const ROOT = path.join(__dirname, '..', process.argv[2] || '');

const IGNORABLE_PATHS = ['.git', 'node_modules'];

if (!fs.existsSync(ROOT)) {
  throw new Error(`/${process.argv[2]} is not a path in this directory`);
}

const findCruisablePaths = async (dirPath) => {
  if (IGNORABLE_PATHS.includes(dirPath.split(path.sep).pop())) {
    return [];
  }

  const isCruisable = fs.existsSync(path.join(dirPath, 'package.json'));

  if (isCruisable) {
    return [dirPath];
  }

  const pathsToCruise = [];

  const contents = fs.readdirSync(dirPath);
  for (const thing of contents) {
    const absThingPath = path.join(dirPath, thing);
    if (fs.lstatSync(absThingPath).isDirectory()) {
      const cruisables = findCruisablePaths(absThingPath);
      pathsToCruise.push(cruisables);
    }
  }

  return Promise.all(pathsToCruise);
};

findCruisablePaths(ROOT)
  .then((unflatPaths) => unflatPaths.flat(Infinity))
  .then((paths) => {
    const cruised = paths
      .filter((path) => path === ROOT)
      .map((path) => ({
        path,
        graph: cruise([path], { outputType: 'dot' }).output,
      }));

    for (const project of cruised) {
      console.log(project.path);
      renderGraphFromSource({ input: project.graph }, { format: 'svg' })
        .then((svgGraph) =>
          fs.writeFile(
            path.join(project.path, '..', 'dependency-graph.svg'),
            svgGraph,
            'utf-8',
            (err) => err && console.err(err),
          ),
        )
        .catch((err) => console.error(err));
    }
  })
  .catch((err) => console.error(err));
