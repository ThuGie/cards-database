import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-130",
	localId: 130,

	// Card informations
	name: {
		en: "Miracle Sphere Beta",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/130/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
