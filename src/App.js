import React, { useEffect, useState } from 'react';
import './App.css';
import {Switch, Route, withRouter, useHistory} from "react-router-dom"
import Auth from "./containers/Auth/Auth"
import ApplicationContainer from "./containers/ApplicationContainer/ApplicationContainer"
import {autoLogin} from "./store/actions"
import {connect} from "react-redux";
import axios from "./axiosInstance";
import {setError, setErrorToNull} from "./store/actions"
import Popup from "./containers/popup/Popup";

const App = props => {
  
  const [firstPageLoad, setFirstPageLoad] = useState(true);
  const history = useHistory();

  useEffect(()=>{
    if(!props.isAuthenticated){
      props.onAutoLogin()
    }
    //see if any error occured
    const reqInterceptor = axios.interceptors.request.use( req => {
      //setError(null);
      props.setErrorToNull()
      return req;
    })
    const resInterceptor = axios.interceptors.response.use( res => {
      return res 
    }
      , err => {
      props.setError(err);
      //console.log(err.response.data);
      //setError(err.response.data.message);
  })

  return function cleanup() {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
  }

  },[])
  useEffect(()=>{
    if(firstPageLoad){
      const lastPageVisited = localStorage.getItem("lastPage")
      if(lastPageVisited){
        console.log(lastPageVisited)
        history.push(lastPageVisited)
      }
      setFirstPageLoad(false)
    }
    if(!firstPageLoad){
      const currentPage = props.location.pathname
      localStorage.setItem("lastPage", currentPage)
    }
  },[props])
    return (
      <Popup>
        <div className="App">
          <Switch>
            <Route path ="/auth/:page" component = {Auth}/>
            <Route path="/" component ={ApplicationContainer}/>
          </Switch>
        </div>
      </Popup> 
    );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogin: () => dispatch(autoLogin()),
    setErrorToNull: ()=> dispatch(setErrorToNull()),
    setError: error => dispatch(setError(error))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App))
