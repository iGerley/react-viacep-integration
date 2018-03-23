import React from 'react';

const Info = (props) => (
    <div>
        { Object.keys(props.data).length > 1 && <p>test</p> }
    </div>
);

export default Info;