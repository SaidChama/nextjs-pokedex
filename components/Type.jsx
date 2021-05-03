import Types from "../styles/types.module.css"

export default function Type({type}, index) {
    return (
        <dev key={index} className={[`capitalize rounded-full border border-white text-center text-white font-semibold`, Types[type]].join(' ')}>
            {type}
        </dev>
    )
}
