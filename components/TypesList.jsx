import Type from '../components/Type'

export default function TypesList({types}) {
    return (
        <>
            {types.map((type, index) => (
                <Type key={index} type={type} />
            ))}
        </>
    )
}
