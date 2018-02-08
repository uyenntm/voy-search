import React, { Component } from 'react';
import {AutoComplete} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//const url_suggestion =`http://odn.voyagersearch.com/solr/v0/select?q=`;
const url_suggestion =`http://odn.voyagersearch.com/solr/v0/select?shards=LOCAL&disp=D156B0D4216D&place.op=within&block=false&start=0&fl=id%2Ctitle%2Cname%3A[name]%2Cformat%2Cabstract%2Cfullpath%3A[absolute]%2Cabsolute_path%3A[absolute]%2Cthumb%3A[thumbURL]%2Cpath_to_thumb%2Csubject%2Cdownload%3A[downloadURL]%2Cformat_type%2Cbytes%2Cmodified%2Cshard%3A[shard]%2Cbbox%2Cgeo%3A[geo]%2Cformat_category%2Ccomponent_files%2Cags_fused_cache%2Clinkcount__children%2Ccontains_name%2Cwms_layer_name%2Ctag_flags%2ChasMissingData%2ClayerURL%3A[lyrURL]%2Cdescription%2Cauthor%2Ckeywords%2Cfs_acquisitionDate%2Cfd_acquisitionDate%2Cfu_cloudCover%2Cfl_cloudCover%2Cfs_cloudCover%2Cfs_bandDesignation%2CnumBands%2Ccomponent_file_count%2Cfs_processingLevel%2CrasterSize%2Cproduct%2Cmeta_Product_Type%2Cname&rows=48&extent.bbox=true&&voyager.config.id=D156B0D4216D&sort=score%20desc&rand=0.30117105194528726&wt=json&q=`;

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
            inputValue:''
        }
        
        this.onUpdateInput = this.onUpdateInput.bind(this);
    }

    onUpdateInput(inputValue){
        const self = this;
        this.setState({inputValue: inputValue}, function (){self.performSearch();})
    }

    performSearch(){
        const  url = url_suggestion+this.state.inputValue;
        console.log(url);
        if(this.state.inputValue !==''){
           const data = fetch(`${url}`)
           .then(res => res.json())
           .then(res=>{
                //console.log(res);
               //console.log(res.response.docs[1].name);
               //console.log(res.response.docs.length);
               //get DataSource
               let nameList = [];
               for(let docs of res.response.docs){
                   //console.log(docs.name);
                   nameList.push(docs.name);
               }
               //console.log("props", this.props);
               //pass data to App Component
               this.props.handleData(res.response.docs);
               this.setState({dataSource:nameList});
               
              // document.getElementById('output').innerText = JSON.stringify(res.response.docs,null,'\t');
           });
        }
    }
    render() {
        return (
            
           <MuiThemeProvider muiTheme={getMuiTheme()}>
           <AutoComplete floatingLabelText="Search Input" fullWidth={true}  dataSource={this.state.dataSource} onUpdateInput = {this.onUpdateInput}/>
           </MuiThemeProvider>
        );
    }
}

export default SearchBar;