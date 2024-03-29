import React, { Component } from 'react';
import {
    Segment,
    Input
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';

import { buscaVideo } from './../store/actions/busca-video'

//const SearchBar = props => {
class SearchBar extends Component {
    pesquisaTermo = e => {
        if(e.keyCode === 13) {
            const termo = e.target.value;
            this.props.buscaVideo(termo);
        }
    }

    render() {
        return(
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' onKeyDown={(e) => this.pesquisaTermo(e)} size='large' placeholder='Search...' />
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: termo => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);