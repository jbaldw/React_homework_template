function Item({ label, value, position,color }) {
    return (
        <g transform={`translate(1,${position})`} fill={color}>
            <text alignmentBaseline='hanging' fontWeight='bold'>{label+':'}</text>
            <text dx='18' alignmentBaseline='hanging' >{value?value.toFixed(4):value}</text>
        </g>
    )
}

export default Item;