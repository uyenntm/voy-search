import React, { Component } from 'react';
import ItemDetail from './ItemDetail';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList,GridTile,GridListTileBar} from 'material-ui/GridList';


const styles = {
    root:{
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'space-around'
    },
    gridList:{
        width: 500,
        height: 450,
        overflowY: 'auto'
    }
};


class SearchResult extends Component {
    
    
    renderItems(){
        // console.log(this.props.resultData);
        // console.log(this.props.resultData[0]);
        // console.log(this.props.resultData.length);
        if(this.props.resultData.length>0){
             return this.props.resultData.map(data =><ItemDetail data={data} />);
        }
        else{
            return '';
        }
    }
    render() {
       // console.log("resultData",this.props.resultData);
        return (
           <div className="search-result-list-container">
               {this.renderItems()}
           </div>
        )
        
    }
}

export default SearchResult;