import React, { Component } from 'react';

export default class Action extends Component {
    state = {
        error: undefined
    }

    handleAction = (event) => {
        event.preventDefault();
        const cep = event.target.elements.cep.value.trim();
        const error = this.props.handleAction(cep);

        this.setState(() => ({ error }));

        if (!error) {
            this.props.handleCEPData(cep);
            event.target.elements.cep.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAction}>
                    <input type="text" name="cep" maxLength="8" />
                    <button>Add CEP</button>
                </form>
            </div>
        );
    }
}