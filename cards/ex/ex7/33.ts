import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-33",
	localId: 33,

	// Card informations
	name: {
		en: "Dark Flaaffy",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
		Type.DARKNESS,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/33/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thunder Slash",
		},
		text: {
			en: "If the Defending Pokémon is a Basic Pokémon, the Defending Pokémon is now Paralyzed. Dark Flaaffy can't use Thunder Slash during your next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
