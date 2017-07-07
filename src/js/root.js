import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import FuJin from './components/fujin';
import XieHou from './components/xiehou';
import PiaoXuan from './components/piaoxuan';
import Dynamic from './components/dynamic';
import VideoPlay from './components/videoplay';
import VideoPlay2 from './components/videoplay2';
import {Router, Route,hashHistory,IndexRoute} from 'react-router';
import 'antd/dist/antd.css';
export default class Root extends React.Component {
	render() {
		return (
			<div>
			<Router history={hashHistory}>
						<Route path="/" component={Index}></Route>
						<Route path="/fujin" component={FuJin}></Route>
						<Route path="/xiehou" component={XieHou}></Route>
						<Route path="/piaoxuan">
								<IndexRoute component={PiaoXuan}/>
								<Route path="/piaoxuan/:id" component={PiaoXuan} />
						</Route>
						<Route path="/dymanic" component={Dynamic}></Route>
						<Route path="/videoplay" component={VideoPlay}></Route>
						<Route path="/otherplay" component={VideoPlay2}></Route>
				</Router>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));
