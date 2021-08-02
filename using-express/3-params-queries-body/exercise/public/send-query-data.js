const sendQueryDataHandler = event => {
  // debugger;

  const queryValRaw = event.target.form.queryData.value;
  const queryVal = encodeURIComponent(queryValRaw);

  fetch(`/query?value=${queryVal}`, {
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));

  event.preventDefault();
};

document
  .getElementById('send-query-button')
  .addEventListener('click', sendQueryDataHandler);
