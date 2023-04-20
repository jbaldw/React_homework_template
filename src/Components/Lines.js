import Line from './Line';

function Lines({data,scale}){
    return (
        <g>
            {Object.keys(data).map(d=><Line key={d} data={data[d]} scale={scale} label={d} />)}
        </g>
    )
}

export default Lines;