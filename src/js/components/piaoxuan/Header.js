/**
 * Created by Administrator on 2017-4-26-0026.
 */

import React, { Component } from 'react';

const styleTop = {
  all:{
  fontSize:'16px',
  height:'60px',
  boxShadow:'0 2px 10px #ccc'
},top_right:{
  width:"100%",
  textAlign:'center',
  height:'60px',
  backgroundColor:'#fff',
  position:"fixed",
  zIndex:'999999'
},topRightImg:{
    height:'100px',marginTop:'-20px'
},button:{
  fontSize:'14px',
  width:'85px',
  height:'30px',
  borderRadius:'15px',
  outline:'none',
  border:'1px solid #ff7b98',
  color:'#fff',
  boxShadow:'0px 2px 0px -0px #ff7b98',
  position:'fixed',
  right:'8px',
  top:'15px',
  zIndex:'99999999',
  backgroundColor:'#ff7b98'
}};
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={styleTop.all}>
              <div style={styleTop.top_right}><a href="http://web.yanzhi.top" style={{display:'inline-block',height:'100%',overflow:'hidden'}}><img style={styleTop.topRightImg}  src='./src/images/logo.svg'/></a></div>
              <div><a href="http://www.yanzhi.top/staticpage/act2.html"><button style={styleTop.button}>APP内打开</button></a></div>
            </div>
        );
    }
    componentDidMount() {
        // console.log("Header");

    }
}




export default Header
