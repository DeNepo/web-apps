// all of this code works!

const fetchAndLoadFile = fileName =>
  fetch('/api/files/' + encodeURIComponent(fileName))
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(fileData => loadFileToEditor(fileData.name, fileData.text))
    .catch(err => console.error(err));

const saveFile = (fileName, fileText) => {
  fetch('/api/files/' + encodeURIComponent(fileName), {
    method: 'POST',
    body: JSON.stringify({ text: fileText }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(filesList => {
      renderFilesList(filesList);
      alert('your changes are saved');
    })
    .catch(err => {
      alert('unable to save your changes');
      console.error(err);
    });
};

const deleteFile = fileName => {
  fetch('/api/files/' + encodeURIComponent(fileName), {
    method: 'DELETE',
  })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(filesList => {
      renderFilesList(filesList);
      alert('file is deleted');
    })
    .catch(err => {
      alert('unable to delete file');
      console.error(err);
    });
};
