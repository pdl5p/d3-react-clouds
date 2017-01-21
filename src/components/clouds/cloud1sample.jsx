import React, { Component } from 'react';
import { Cloud1 } from './cloud1';

const Cloud1Sample = () => {

    return (<div className="cloud1-container">
        <Cloud1 style={{ left: '100px' }} className="fast" />
        <Cloud1 style={{ left: '200px', top: '-50px' }} className="medium" />
        <Cloud1 style={{ top: 100 }} className="slow" />
        <Cloud1 style={{ top: 50, left: '50%', opacity: 0.9, transform: 'translateX(-50%)', zIndex: 1000 }} className="" />
        <Cloud1 style={{ left: 500, top: '-50px' }} className="medium" />
        <Cloud1 style={{ top: -250 }} className="" />
    </div>
    )
}

export { Cloud1Sample }