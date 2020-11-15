const BASE_URL = 'http://localhost:3001/';

const fetchRequest = (options) => {
  return fetch(`${BASE_URL}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
};

export const getCustomer = (body) => {
  return fetchRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
