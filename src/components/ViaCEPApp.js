import React, { Component } from 'react';

import Action from './Action';
import Info from './Info';
import Header from './Header';

export default class ViaCEPAPP extends Component {

    state = {
        cep: '',
        data: {}
    };

    handleCEPData = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json })
            });
    }

    handleAction = (cep) => {
        if (isNaN(cep)) {
            return 'Only number are accepted.';
        } else if (cep.length < 8) {
            return 'A CEP code has 8 characters.';
        }
        this.setState({ cep });
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Action handleAction={this.handleAction} handleCEPData={this.handleCEPData} />
                    <Info data={this.state.data} />
                </div>
            </div>
        )
    }
}