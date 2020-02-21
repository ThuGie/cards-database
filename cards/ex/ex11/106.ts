import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-106",
	localId: 106,

	// Card informations
	name: {
		en: "Holon Energy WP",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
