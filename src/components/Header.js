import React from 'react';

const Header = (props) => (
    <div className="header">
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'React ViaCEP Integration'
};

export default Header;