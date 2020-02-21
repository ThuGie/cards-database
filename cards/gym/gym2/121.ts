import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-121",
	localId: 121,

	// Card informations
	name: {
		en: "Sabrina's Psychic Control",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/121/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
