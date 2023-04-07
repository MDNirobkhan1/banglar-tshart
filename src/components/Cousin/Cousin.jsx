import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasfriend, ring}) => {
    return (
        <div>
            <h4>Cousin </h4>
            <p><span>{children}</span></p>
            {hasfriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;