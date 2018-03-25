import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'React ViaCEP Integration'
};

export default Header;