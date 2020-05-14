const sendBodyDataHandler = event => {
  // debugger;

  const bodyVal = event.target.form.bodyData.value;

  fetch(`/api/body/`, {
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
  .getElementById('send-body-button')
  .addEventListener('click', sendBodyDataHandler);
