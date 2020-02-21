import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-120",
	localId: 120,

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/120/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/120/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/120/high",
		},
	},

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mach Cut",
			fr: "Coupe Vive",
		},
		text: {
			en: "Discard a Special Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.FIGHTING
		],
		name: {
			en: "Dragonblade",
			fr: "Draco-Lame",
		},
		text: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
