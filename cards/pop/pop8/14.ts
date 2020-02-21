import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-14",
	localId: 14,

	// Card informations
	name: {
		en: "Happiny",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 440,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
		}
	}],

	attacks: [{
		name: {
			en: "Lively",
		},
		text: {
			en: "Remove 2 damage counters from 1 of your Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
