import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-131",
	localId: 131,

	// Card informations
	name: {
		en: "Cynthia's Feelings",
		fr: "Les sentiments de Cynthia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/131/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/131/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Mélangez votre main à votre deck. Ensuite, piochez 4 cartes. Si n'importe lequel de vos Pokémon a été mis K.O lors du tour précédent de votre adversaire, piochez 4 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
