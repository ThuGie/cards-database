import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Chikorita",
		fr: "Germignon",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 152,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/53/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/53/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nap",
			fr: "Tit'sieste",
		},
		text: {
			en: "Remove 1 damage counter from Chikorita.",
			fr: "Retirez 1 marqueur de dégât à Germignon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque imprudente",
		},
		text: {
			en: "Chikorita does 10 damage to itself.",
			fr: "Germignon s’inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
