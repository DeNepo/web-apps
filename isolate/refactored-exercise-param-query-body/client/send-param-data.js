const sendParamDataHandler = event => {
  // debugger;

  const paramVal = event.target.form.paramData.value;

  fetch(`/api/param/${paramVal}`, {
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
  .getElementById('send-param-button')
  .addEventListener('click', sendParamDataHandler);
