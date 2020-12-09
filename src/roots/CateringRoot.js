import React, { Component } from 'react';
import { CateringPage } from '../pages';

class Root extends Component {
    render() {
        return <CateringPage data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
