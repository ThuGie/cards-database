import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY79",
	localId: "XY79",

	// Card informations
	name: {
		en: "Latios",
		fr: "Latios",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY79/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY79/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissement",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Blade",
		},
		text: {
			en: "If Latias is on your Bench, this attack does 50 more damage.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
