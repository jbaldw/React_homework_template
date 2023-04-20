import Circle from './Circle';

function Points({ data, scale, hover }) {
    return (
        <g>
            {Object.keys(data).map(d => <Circle key={d} data={data[d]} scale={scale} label={d} hover={hover} />)}
        </g>
    )
}

export default Points;