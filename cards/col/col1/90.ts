import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/90/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/90/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
