import React, { Component } from 'react';
import ItemDetail from './ItemDetail';
class SearchResult extends Component {
    
    
    renderItems(){
        console.log(this.props.resultData);
        console.log(this.props.resultData[0]);
        console.log(Array.isArray(this.props.resultData));
        return this.props.resultData.map(data =>{
            return <ItemDetail/>
        })
      //  return this.state.resultData.map(item => <ItemDetail />);
    }
    render() {
       // console.log("resultData",this.props.resultData);
        return (<div>
            {this.renderItems()}
        </div>)
        
    }
}

export default SearchResult;