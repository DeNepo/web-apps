const sendDataHandler = event => {
  // debugger;

  const paramVal = event.target.form.paramData.value;
  const queryValRaw = event.target.form.queryData.value;
  const queryVal = encodeURIComponent(queryValRaw);
  const bodyVal = event.target.form.bodyData.value;

  fetch(`/api/${paramVal}?value=${queryVal}`, {
    method: 'POST',
    body: JSON.stringify({ value: bodyVal }),
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
    .then(data => console.log(data))
    .catch(err => console.error(err));

  event.preventDefault();
};

document
  .getElementById('send-button')
  .addEventListener('click', sendDataHandler);
