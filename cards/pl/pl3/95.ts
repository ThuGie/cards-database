import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Chatot",
		fr: "Pijako",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 441,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/95/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/95/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 137,
		name: "Satoshi Ohta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nosedive",
			fr: "Descendre en piqué",
		},
		text: {
			en: "Flip a coin. If tails, Chatot does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Pijako s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
