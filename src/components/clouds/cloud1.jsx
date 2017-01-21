import React from 'react';

const Cloud1 = (props) => {

    const path = "M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"

    const opacity = props.style.opacity || 0.3;

    const style = {
        opacity,
        fill: "#ccc",
        stroke: "white",
        strokeWidth: "10px"
    }

    const cloud = (<svg style={style} width="512" height="512" viewBox="0 0 512 512">
        <path id="cloud-icon" d={path} />
    </svg>);

    var className = `cloud ${props.className}`;

    return (<div style={props.style} className={className}>{cloud}</div>)
}

export { Cloud1 }