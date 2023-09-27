import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0,
    error: false,
  }

  increment = () => {
    this.setState(state => ({ ...state, count: state.count + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ ...state, count: state.count - 1 }))
  }

  crash = () => {
    this.setState({ error: true })
  }

  render() {
    if (this.state.error) {
      throw new Error('You killed the app')
    }

    return (
      <div>
        <h1>Hello world!</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.crash}>💥Crash💥</button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
