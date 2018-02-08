import React, { Component } from 'react';
import {GridList,GridTile} from 'material-ui/GridList';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        console.log("data:",props.data);
    }
    
    render() {

        return (
            <div className="search-item">
                <a target="_blank" href={this.props.data.fullpath}><img height="133" width="200" src={this.props.data.thumb} />
                </a>
                <p className="truncate"><a target="_blank" href={this.props.data.fullpath}>{this.props.data.name}</a></p>
                <p className="truncate subtitle">Keywords: <span className="value">{this.props.data.keywords}</span></p>
                <p className="truncate subtitle">Format: <span className="value">{this.props.data.format_category}</span></p>
            </div>
        );
    }
}

export default ItemDetail;