import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-79",
	localId: 79,

	// Card informations
	name: {
		en: "Shellder",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 90,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Minimize",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Shellder by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
