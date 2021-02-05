export const fetchRequest = (url, method) => {
  if (method === 'get')

  {return fetch(url)
    .then(res => res.json())
    .then(console.log);
}

  return console.log('nope');

};
