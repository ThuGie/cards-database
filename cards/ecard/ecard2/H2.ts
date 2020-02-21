import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H2",
	localId: "H2",

	// Card informations
	name: {
		en: "Arcanine",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H2/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 188,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extreme Speed",
		},
		text: {
			en: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blow",
		},
		text: {
			en: "You may discard any number of Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
