import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasfriend={true} ring={ring}>nabir</Cousin>
            </section>
            
        </div>
    );
};

export default Aunty;