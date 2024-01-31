console.log('ajax running')

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(res => res.json())
  .then(data => console.log(data))


console.log('parallel running')