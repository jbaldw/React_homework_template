import Item from "./Item";

function Label({ data, scale,current }) {
    const h=15;
    return (
        <g transform={`translate(${scale.x.range()[0]*1.1},${scale.y.range()[1]})`}>
            <rect width='72' height={h*Object.keys(data).length} fill='none' stroke='black'/>
            {Object.keys(data).map((d,i)=><Item key={d} label={d} value={current<0?'':data[d][current]} position={h*i} color={scale.c(d)} />)}
        </g>
    )
}

export default Label;