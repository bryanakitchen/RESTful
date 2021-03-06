export const fetchRequest = (url, method, body) => {
  if(method === 'get'){
    return fetch(url)
      .then(res => res.json());

  } 
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
    .then(res => res.json());
};
