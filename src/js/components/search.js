import React from 'react';
import { Link} from 'react-router'
export default class SearchToper extends React.Component {
	render() {
    const SearchTop={
      all:{
        backgroundColor:'#fff',
        marginBottom:'1px',
        padding:'0px 8px 12px 8px',
        display:'flex'
      },
      cancle:{
        width:'40px',
        textAlign:'center',
        marginTop:'6px'
      }
    }
		return (
			<div style={SearchTop.all}>
				<Link to={"dymanic"}>
						<div class="search_top">
								<div><span class="icon-sousuo">&nbsp;大家都在搜：<span>小茉莉大神</span></span></div>
								<input/>
						</div>
				</Link>
			</div>
		);
	};
}
