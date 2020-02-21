import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY204",
	localId: "XY204",

	// Card informations
	name: {
		en: "Gym Badge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY204/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY204/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
