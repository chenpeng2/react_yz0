import React from 'react';
import PopularityModel1 from '../index_menu/popularitymodel1';
import PopularityModel2 from '../index_menu/popularitymodel2';
import PopularityModelComment from '../index_menu/popularitymodelcomment';
import Blank from '../index_menu/blank';
import LoadMore from '../index_menu/loadmore';
export default class Popularity extends React.Component {
	constructor() {
		super();
		this.state = {
			rank:[],
			arrays:[],
			page:0,
			isLoadingMore:true
		}
	}
	componentDidMount() {
	}
	sliceArr(array, size) {
							var result = [];
							for (var x = 0; x < Math.ceil(array.length / size); x++) {
									var start = x * size;
									var end = start + size;
									result.push(array.slice(start, end));
							}
							return result;
	}
	loadMoreData() {
    // 加载下一页的数据，result
		++this.state.page;
		this.setState({rank:this.state.rank.concat(this.state.arrays[this.state.page]),isLoadingMore:true})
		var _this=this;
		setTimeout(function(){
			_this.setState({isLoadingMore:false})
		},200)
    // 处理
    // this.resultHandle(result)
}
	render() {
		let data=this.state.rank
		const user = {
			all: {
				margin: '0 10px',
				position: 'relative'
			},
			marginTop: {
				marginTop: '10px'
			}
		}
		const popmodel = data ? data.map((list,i) => {
					return  list.backgroundType == '1' ?
					<div style={user.marginTop} key={i}>
						<PopularityModel1 rank={list}  key={i}/>
					</div>
					:
					<div style={user.marginTop} key={i}>
						<PopularityModel2 rank={list} key={i}/>
					</div>
				}
			): null
		return (
			<div>
				{popmodel}
				<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
			</div>
		);
	}
	showloadmore(){
		var _this=this;
		setTimeout(function(){
			_this.setState({isLoadingMore:false})
		})
	}
	componentWillMount() {
		fetch("http://yanzhi.top/origin/v1/getRanking.do", {
			method: "POST"
		}).then(res => res.json()).then(json => {
			this.setState({arrays:this.sliceArr(json.data.list,10)});
			let arrays=this.sliceArr(json.data.list,10);
			let length=json.data.list.length/10;
			this.setState({
				rank: arrays[this.state.page]
			});
			this.showloadmore()
		})
}
}
