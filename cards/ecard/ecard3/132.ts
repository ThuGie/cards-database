import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-132",
	localId: 132,

	// Card informations
	name: {
		en: "Mirage Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/132/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
