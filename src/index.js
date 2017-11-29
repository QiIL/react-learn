import React, { Component } from 'react'
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
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div className=" ">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  )
}

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), cal: 1, inc: 1 }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
      cal: this.state.cal + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, word!</h1>
        <h2>It is {this.state.date.toLocaleString()}.</h2>
        <h3>{this.state.cal} seconds is pass</h3>
      </div>
    )
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

// render(element4, document.getElementById('root'))
// // setInterval(tick, 2000)
// setTimeout(function() {
//   render(<App />, document.getElementById('root'))
// }, 1500)
// const element5 = (
//   <Comment text="QiLL is very exciting" date={new Date()} author={user} />
// )
// setTimeout(function() {
//   render(element5, document.getElementById('root'))
// }, 1500)

render(
  <div>
    <Clock />
    <Toggle />
  </div>,
  document.getElementById('root')
)
