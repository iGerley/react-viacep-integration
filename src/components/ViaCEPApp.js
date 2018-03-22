import React, { Component } from 'react';

import Action from './Action';
import Info from './Info';
import Header from './Header';

export default class ViaCEPAPP extends Component {
    state = {
        cep: undefined
    }

    handleAction = (cep) => {
        if (isNaN(cep)) {
            return 'Only number are accepted.'
        } else if (cep.length < 8) {
            return 'A CEP code has 8 characters.'
        }
        this.setState({ cep });
    }

    render() {
        const subtitle = 'Something here.';
        const placeholder = 'Type the CEP number here...';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div>
                    <Action handleAction={this.handleAction} />
                </div>
            </div>
        )
    }
}