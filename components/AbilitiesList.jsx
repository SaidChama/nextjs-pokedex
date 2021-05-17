import { removeSpecialChars } from '../src/js/format.js'

export default function AbilitiesList({abilities}) {
    return (
        <>
            {abilities.map((id, index) => (
                id.is_hidden ?
                    <li className="capitalize list-none" key={index}>Hidden: {removeSpecialChars(id.ability.name)}</li>
                    :
                    <li className="capitalize list-none" key={index}>Ability {index + 1}: {removeSpecialChars(id.ability.name)}</li>
            ))}
        </>
    )
}


