import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-31",
	localId: 31,

	// Card informations
	name: {
		en: "Golbat",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/31/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},

	abilities: [{
		id: 905,
		type: AbilityType.POKEBODY,
		name: {
			en: "Self-control",
		},
		text: {
			en: "Golbat can't be Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
		},
		text: {
			en: "Remove 1 damage counter from Golbat.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
