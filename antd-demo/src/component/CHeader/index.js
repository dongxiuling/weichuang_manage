import React, { Component } from 'react';
import "./index.css";
import { Row } from 'antd';
import formatDate from './../../pages/Timer/timer';
export default class CHeader extends Component{
    constructor(params){
        super(params);
        this.state={
            timer:''
        }
    }
    componentWillMount(){
        setInterval(()=>{
            let now=new Date();
            let timer =formatDate(now);
            console.log(timer)
            this.setState({
                timer
            })
      },1000);
    }
    render(){
        return(
            <div>
               <Row className="header-top">
               <span>欢迎使用</span>
               <a herf="#">退出</a>
               </Row>
               <Row className="header-date">
               {this.state.timer}
               </Row>
            </div>
        )
    }

}