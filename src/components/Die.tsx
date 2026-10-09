type DieProps = {
    value:number
}

export default function Die({value}:DieProps){

    return (
        <button className="die">
            {value}
        </button>
    )
}