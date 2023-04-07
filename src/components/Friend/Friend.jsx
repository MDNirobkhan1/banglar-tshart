import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h1>Friend</h1>
             {ring &&  <p><small>Rind: Daimond</small></p> }
        </div>
    );
};

export default Friend;