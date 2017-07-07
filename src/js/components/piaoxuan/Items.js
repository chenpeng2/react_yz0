/**
 * Created by Administrator on 2017-4-28-0028.
 */
import React,{Component} from 'react';

import {Link} from 'react-router';

const aStyle={
    fontSize:'0.571rem',
    textDecoration:'none',
    borderRadius:'0.51rem',
    color:'#fff',
    textAlign:'center',
    background:'#ffa8a8',
    width:'100%',
    height:'1.143rem',
    lineHeight:'1.143rem',
    display:'inline-block',
},
spanStyle={
    display:'block',
    color:'#222',
    height:'1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
},
imgStyle={
    width:'100%',
    background:'#efeff4'
},
    center={
        textAlign:'center',
        fontSize:'0.67353rem',
        border:'1px solid #ddd',
        borderRadius:'0.2401rem',
        padding:'0.347rem 0.612rem',
        marginBottom:'0.306rem',
    }

class Items extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps) {
	 }
    render(){
        return(
            <div style={center}>
            <Link   to={{pathname:"/piaoxuan/candidate",state:this.props}}>
                <p style={{width:'3.6rem',height:'3.6rem',overflow:'hidden',borderRadius:'50%',marginTop:'0.2401rem'}}>
                    <img style={imgStyle} src={this.props.headUrls} alt="头像"/>
                </p>
                <span style={spanStyle}>
                    {this.props.nickName}
                </span>
                <span style={spanStyle,aStyle}>投票</span>
                </Link>
            </div>
        );
    }
}

export default Items ;
