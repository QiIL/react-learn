import React from 'react'
import { render } from 'react-dom'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

const user = {
  firstName: 'David',
  lastName: 'lanPard',
  name: 'David Lanpard',
  avatarUrl:
    'http://oqzgtjqen.bkt.clouddn.com/%E6%88%90%E9%BE%99%E5%B4%A9%E6%BA%83.jpg'
}

const element = getGreeting(user)

const element2 = <div tabIndex="0" />

const element3 = <img src={user.avatarUrl} />

const element4 = (
  <div>
    {element}
    {element2}
    {element3}
    <h2>Good to see you here!</h2>
  </div>
)

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, Clock!</h1>
//       <h2>It is {new Date().toLocaleString()}</h2>
//     </div>
//   )
//   render(
//     element,
//     document.getElementById('root')
//   )
// }

function Welcome(props) {
  return <h1>Hi my girls: {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="aa" />
      <Welcome name="DD" />
      <Welcome name="CC" />
      <Welcome name="BB" />
    </div>
  )
}

function formatDate(date) {
  return new Date(date).toLocaleString()
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

render(element4, document.getElementById('root'))
// setInterval(tick, 2000)
setTimeout(function() {
  render(<App />, document.getElementById('root'))
}, 1500)
const element5 = <Comment text="QiLL is very exciting" date={Date.now} author={user}/>
setTimeout(function() {
  render(element5, document.getElementById('root'))
}, 1500)
