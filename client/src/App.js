import React, {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'

import AuthServices from './services/auth.services'
import ProtectedRoute from './components/routes/protectedRoute'

import NavBar from './components/NavBar'
import PlanList from './components/Plan/PlanList'
import PlanDetail from './components/Plan/PlanDetail'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Footer from './components/footer'
import SignupCompany from './components/auth/SignupCompany';
import LoginCompany from './components/auth/LoginCompany';
import Profile from './components/Profile'
import CompanyPlans from './components/Plan/CompanyPlans';
import UserBag from './components/Payment/UserBag'
import PdfCreator from './components/Payment/PdfCreator'
import UpdateCoupon from './components/Coupon/UpdateCoupon' 
import UserCoupons from './components/Coupon/UserCoupons' 
import Home from './components/Home';

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
        <NavBar cosa={this.props} setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>
        
          <div className="under-nav">
        <Switch> 

        <Route exact path='/' render={() => <Home setUser={this.setTheUser}/>}/>
          <ProtectedRoute exact path='/profile' user={this.state.loggedInUser} component={Profile} />
          <ProtectedRoute exact path='/profile/plans' user={this.state.loggedInUser} component={CompanyPlans} />
          <ProtectedRoute exact path='/profile/coupons' user={this.state.loggedInUser} component={UserCoupons} />
          <Route exact path='/plans' render={() => <PlanList userInSession={this.state.loggedInUser}/>}/>
          <ProtectedRoute exact path='/plans/:id' component={PlanDetail} user={this.state.loggedInUser}/>
        <Route exact path='/updatecoupon/:id' render={(match) => <UpdateCoupon {...match} user={this.state.loggedInUser}/>}/>

          <Route exact path='/payment'  render={()=> <UserBag user={this.state.loggedInUser}></UserBag>}/>
          <Route exact path='/pdf'  component={PdfCreator}/>
        </Switch>
        </div>

      <Footer/>
      </>
        )
      }
      else {
        return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>
          
          <div className="under-nav">
        <Switch>
          <Route exact path='/' render={() => <Home setUser={this.setTheUser}/>}/>
          <Route exact path='/plans' render={() => <PlanList userInSession={this.state.loggedInUser}/>}/>
          <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
          <Route path="/signup/company" exact render={match => <SignupCompany {...match} setUser={this.setTheUser} />} />
          <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
          <Route path="/login/company" exact render={match => <LoginCompany {...match} setUser={this.setTheUser} />} />
        </Switch>
        </div>
        <Footer/>
        </>
        )
      }
  }
}

export default App
