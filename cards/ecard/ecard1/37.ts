import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-37",
	localId: 37,

	// Card informations
	name: {
		en: "Blastoise",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},

	abilities: [{
		id: 273,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Jet Stream",
		},
		text: {
			en: "Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose one of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Energy Cannon",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
