const express = require('express')
const bodyParser = require('body-parser')

const feedRoutes = require('./routes/feed')

const app = express()

app.use(bodyParser.json())

// Access-Control-Allow-Origin: http://foo.example
// Access-Control-Allow-Methods: POST, GET
// Access-Control-Allow-Headers: X-PINGOTHER, Content-Type

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use('/feed', feedRoutes)

app.listen(8080)

/*

<button id="get">Get Posts</button>

<button id="post">Create a Post</button>

const getButton = document.getElementById('get');
const postButton = document.getElementById('post');

getButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/posts')
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err))
})

postButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/post', {
    method: 'POST',
    body: JSON.stringify({
      title: 'post title',
      content: 'post content'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err))
})
*/