import * as d3 from 'd3';

function Line({ data, scale, label }) {
    const path = d3.line()
        .x((d,i) => scale.x(i))
        .y(d => scale.y(d))
        (data);
    return (
        <path d={path} stroke={scale.c(label)} strokeWidth='2' fill='none' />
    )
}

export default Line;