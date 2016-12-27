
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import Main from './scenes/Main'
import History from './scenes/History'
import About from './scenes/About'

import commonStyles from './styles/common'

const RouterWithRedux = connect()(Router)
import reducers from './reducers'

const middleware = [/* ...your middleware (i.e. thunk) */]
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)

class Sequent extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root' hideNavBar style={commonStyles.rootScene}>
            <Scene key='main' component={Main} initial duration='0' />
            <Scene key='history' component={History} duration='0' />
            <Scene key='about' component={About} duration='0' />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('sequent', () => Sequent)
