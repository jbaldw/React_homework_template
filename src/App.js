import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './App.css';

import Lines from './Components/Lines';
import Points from './Components/Points';
import Label from './Components/Label';
import Cursor from './Components/Cursor';

function App() {
    // methods
    const GenData = () => ['A', 'B', 'C', 'D', 'E'].reduce((arr, crr) => ({ ...arr, [crr]: d3.range(10).map(d => Math.random()).sort() }), {});
    const Hover = i => () => setId(i);

    // useState
    const [objData, setData] = useState(GenData);
    const [intId, setId] = useState(-1);

    // static variables
    const size = { width: 800, height: 500, margin: 50 };
    const scale = {
        y: d3.scaleLinear().domain(['min', 'max'].map(x => d3[x](Object.values(objData).flat()))).range([size.height - size.margin, size.margin]),
        x: d3.scalePoint().domain(d3.range(Object.values(objData)[0].length)).range([size.margin, size.width - size.margin]),
        c: d3.scaleOrdinal(d3.schemeCategory10)
    }

    // useRef
    const xAxis = useRef();
    const yAxis = useRef();

    // useEffect
    useEffect(() => {
        // create axis
        d3.select(xAxis.current).call(d3.axisBottom(scale.x));
        d3.select(yAxis.current).call(d3.axisLeft(scale.y));
    });

    return (
        <svg viewBox={`0 0 ${size.width} ${size.height}`}>
            {intId>=0?<Cursor yrange={scale.y.range()} position={scale.x(intId)} />:null}
            <Lines data={objData} scale={scale} />
            <Points data={objData} scale={scale} hover={Hover} />
            <Label data={objData} scale={scale} current={intId} />
            <g ref={xAxis} className='x axis' transform={`translate(0,${size.height - size.margin})`} />
            <g ref={yAxis} className='y axis' transform={`translate(${size.margin},0)`} />
        </svg>
    );
}

export default App;
