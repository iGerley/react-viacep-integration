import React from 'react';

const Info = (props) => (
    <div className="widget">
        {Object.keys(props.data).length > 1 && (
            <div>
                <p>CEP: {props.data.cep}</p>
                <p>Logradouro: {props.data.logradouro}</p>
                <p>Complemento: {props.data.complemento}</p>
                <p>Bairro: {props.data.bairro}</p>
                <p>Localidade: {props.data.localidade}</p>
                <p>UF: {props.data.uf}</p>
                <p>Unidade: {props.data.unidade}</p>
                <p>IBGE: {props.data.ibge}</p>
            </div>
        )}
    </div>
);

export default Info;