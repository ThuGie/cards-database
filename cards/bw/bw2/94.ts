import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-94",
	localId: 94,

	// Card informations
	name: {
		en: "Max Potion",
		fr: "Potion Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/94/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/94/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/94/high",
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



	attacks: [{
		name: {},
		text: {
			fr: "Soignez tous les dégâts de l'un de vos Pokémon. Ensuite, défaussez toutes les Énergies attachées au Pokémon choisi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
