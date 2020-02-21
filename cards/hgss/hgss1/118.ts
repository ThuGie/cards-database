import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-118",
	localId: 118,

	// Card informations
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/118/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/118/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/118/high",
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
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
