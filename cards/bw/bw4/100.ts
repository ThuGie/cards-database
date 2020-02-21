import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Emboar",
		fr: "Roitiflam",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 500,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/100/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/100/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/100/high",
		},
	},

	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 373,
		type: AbilityType.TALENT,
		name: {
			en: "Inferno Fandango",
			fr: "Tango Infernal",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre main à 1 de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
