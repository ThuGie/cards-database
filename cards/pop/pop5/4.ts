import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-4",
	localId: 4,

	// Card informations
	name: {
		en: "Double Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/4/high",
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
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
