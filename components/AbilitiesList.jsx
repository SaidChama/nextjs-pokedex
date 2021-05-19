import { removeSpecialChars } from '../src/js/format.js'

export default function AbilitiesList({abilities}) {
    return (
        <>
            {abilities.map((id, index) => (
                id.is_hidden ?
                    <li className="capitalize list-none font-semibold text-gray-800" key={index}>Hidden: <span className="text-black font-semibold">{removeSpecialChars(id.ability.name)}</span></li>
                    :
                    <li className="capitalize list-none font-semibold text-gray-800" key={index}>Ability {index + 1}: <span className="text-black font-semibold">{removeSpecialChars(id.ability.name)}</span></li>
            ))}
        </>
    )
}


