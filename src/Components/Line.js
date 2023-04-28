import * as d3 from 'd3';

function Line({ data, scale, label }) {
    const path = d3.line().x((d, i) => scale.x(i)).y(d => scale.y(d))(data);

    return (
        <path d={path} stroke={scale.c(label)} fill='none' strokeWidth='2' />
        /*
            *****************************************************************************************
            * Define the line with the following attributes                                         *
            *   d = {path} - the path, which has been defined earlier                                *
            *   stroke = {...} - the color, which should be defined by the color scale and label    *
            *   fill = 'none' -  should explicitly specify no fill for the line                     *
            *   strokeWidth = '2' - you can customize the width of this line                        *
            *****************************************************************************************
        */
    )
}

export default Line;