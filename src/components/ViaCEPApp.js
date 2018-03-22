import React, { Component } from 'react';
import Header from './Header';

export default class ViaCEPAPP extends Component {
    render () {
        const subtitle = 'Something here.'
        return (
            <div>
                <Header subtitle={subtitle} />
            </div>
        )
    }    
}