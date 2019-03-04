
import React,{Component} from 'react';

import { Button } from 'antd';
// import api from './api'
// import * as action from "./api";
import "./index.css";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTypeIsPki: false
        };
        // this.doLogin = this.doLogin.bind(this);
    }

    // doLogin(e) {
    //     e.preventDefault();
    //     const params = this.props.form.getFieldsValue();
    //     this.props.doLogin(params);
    // }
    componentDidMount() {
    //     apiRequest.post(apiManager.newsList, {
    //     start: 0,
    //         end: 20
    //     }, data => console.log(data), data => console.log(data.code))
    }

    componentWillReceiveProps() {

    }

    render() {

        return (
            <div className="login">
                <p>
                    {this.state.titleName}
                </p>
                <p>
                    {this.props.loginData}
                </p>
                <Button> login</Button>
            </div>
        )
    }
}



export default Login;
