import React, { Component } from "react";
// 以CSS Modules方式引入404页样式
import style from "./index.less";

// 导出404页组件
class NotFound extends Component {
    render(){
        console.log('style  >>>>>>>>>>>',style)
        return <div className="container">
                  <p className={ style["not-found"] }>404</p>
                  {style}
               </div>
    }
}

export default NotFound;
