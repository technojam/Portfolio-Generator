import React, { Component,createContext,useContext ,useEffect,useReducer} from 'react';
import {Route,useHistory} from 'react-router-dom';
import Landing from './LandingComponent';
import Home from './HomeComponent';
import Footer from './Footer'
import Templates from '../containers/Templates';
import {reducer,initialState} from '../reducer/useReducer'


export const UserContext = createContext()

const Routing=()=>{

   const{state,dispatch}=useContext(UserContext)
   useEffect(()=>{
   const user = JSON.parse(localStorage.getItem("user"))
   if(user){
      dispatch({type:"USER",payload:user})
   
   }},[])}


function Main (){
     const [state,dispatch]= useReducer(reducer,initialState)
        return (
            <UserContext.Provider value={{state,dispatch}}>
                <Route exact path="/" component={Landing} value={{state,dispatch}}/>
                <Route exact path="/home" component={Home} />
                <Route exact path="/templates" component={Templates} />
                <Footer />
               </UserContext.Provider>
        );
    
}

export default Main;