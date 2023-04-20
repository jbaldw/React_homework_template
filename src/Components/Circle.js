function Circle({ data, scale, label,hover }) {
    return (
        <g>
            {data.map((d, i) => <circle key={i} cx={scale.x(i)} cy={scale.y(d)} r='6' fill={scale.c(label)}
            onMouseMove={hover(i)} onMouseOut={hover(-1)} />)}
        </g>
    )
}

export default Circle;