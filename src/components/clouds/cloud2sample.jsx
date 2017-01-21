import React from 'react';
import { Cloud1Sample } from './cloud1sample';
import { Cloud2 } from './cloud2';
import { Cloud3 } from './cloud3';
import { Cloud4 } from './cloud4';

import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';

class Cloud2Sample extends React.Component {

    constructor(props){
        super(props);

        // this.state = { data: []};

        // setInterval(() => {
        //     this.state.data.length < 10 ? this.add() : this.remove()
        // }, 100);
    }

    render(){
        return (
            <div>
                <Cloud4 />
            </div>
        )
    }
}

export { Cloud2Sample };
