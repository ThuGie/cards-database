import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rally Back",
				fr: "Répercussions"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent’s Pokémon during their last turn, this attack does 90 more damage.",
				fr: "Si au moins l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
