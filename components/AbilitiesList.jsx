import { removeSpecialChars } from '../src/script/format.js'

export default function AbilitiesList({abilities}) {
    return (
        <>
            {abilities.map((id, index) => (
                id.is_hidden ?
                    <li className="capitalize" key={index}>Hidden: {removeSpecialChars(id.ability.name)}</li>
                    :
                    <li className="capitalize" key={index}>Ability {index + 1}: {removeSpecialChars(id.ability.name)}</li>
            ))}
        </>
    )
}


