import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-99",
	localId: 99,

	// Card informations
	name: {
		en: "Registeel ex",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 379,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
		},
		text: {
			en: "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Steel Wave",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Benched Pokémon of the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
