import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-82",
	localId: 82,

	// Card informations
	name: {
		en: "Regigigas-EX",
		fr: "Regigigas-EX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Power",
			fr: "Giga Pouvoir",
		},
		text: {
			en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Hammer",
			fr: "Marteau Rageur",
		},
		text: {
			en: "Does 10 more damage for each damage counter on this Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
