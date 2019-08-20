import React, {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'

import AuthServices from './services/auth.services'
import ProtectedRoute from './components/routes/protectedRoute'

import NavBar from './components/NavBar'
import PlanList from './components/PlanList'
import PlanDetail from './components/PlanDetail'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Footer from './components/footer'

class App extends Component {
  constructor(){
    super()
    this.state = { loggedInUser: null}
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({loggedInUser: user})
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null){
      this.authServices.loggedin()
        .then(response => this.setState({loggedInUser: response}))
        .catch(x => this.setState({loggedInUser: false}))
    }
  }
  render(){
    this.fetchUser ()

      if (this.state.loggedInUser) {
        return(
      <>
        <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>

        <Switch>
          <Route exact path='/plans' render={() => <PlanList userInSession={this.state.loggedInUser}/>}/>
          <Route exact path='/plans/:id' component={PlanDetail}/>
        </Switch>
        
      <Footer/>
      </>
        )
      }
      else {
        return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>
        <Switch>
          <Route exact path='/plans' render={() => <PlanList userInSession={this.state.loggedInUser}/>}/>
          <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
          <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
        </Switch>

        <Footer/>
        </>
        )
      }
  }
}

export default App
