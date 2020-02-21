import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-9",
	localId: 9,

	// Card informations
	name: {
		en: "Delta Species Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/9/high",
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











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
