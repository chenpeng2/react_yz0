import React from 'react';

export default class LoadMore extends React.Component {
	componentDidMount() {

	}
  render() {
    return (
			<div  ref="wrapper">
					{
							this.props.isLoadingMore
							? <span className="loading">数据加载中...</span>
							: <span className="load-more" onClick={this.loadMoreHandle.bind(this)}>点击加载更多</span>
					}
			</div>
    )
}
loadMoreHandle() {
    this.props.loadMoreFn()
}
}
