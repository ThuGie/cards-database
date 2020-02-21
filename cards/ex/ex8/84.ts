import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-84",
	localId: 84,

	// Card informations
	name: {
		en: "Balloon Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
