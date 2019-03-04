import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './apps/login';

import NotFound from "./apps/not-found";

const Home = () => (
    <div>
        Home
    </div>
)




class RouterMap extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/Home' component={Home}></Route>
              
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
             // routes中路由无法匹配时显示的404页面
       
        )
    }
}

export default RouterMap;