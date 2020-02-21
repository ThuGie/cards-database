import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL5",
	localId: "SL5",

	// Card informations
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/SL5/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL5/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Wing",
			fr: "Aile brûlante",
		},
		text: {
			en: "Flip a coin. If tails, discard all Fire Energy attached to Ho-Oh.",
			fr: "Lancez une pièce. Si c’est pile, défaussez toutes les Énergies Fire attachées à Ho-Oh.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
