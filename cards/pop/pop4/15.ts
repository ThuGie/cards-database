import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-15",
	localId: 15,

	// Card informations
	name: {
		en: "Treecko (Delta Species)",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 252,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shining Claws",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
