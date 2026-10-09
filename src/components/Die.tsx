type DieProps = {
    value:number,
    isHeld:boolean
}

export default function Die(props:DieProps){

    return (
        <button className={props.isHeld ? "held" : ""}>
            {props.value}
        </button>
    )
}