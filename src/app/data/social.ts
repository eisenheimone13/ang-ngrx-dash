import { ISocial } from "../models/social"

const min = 30000
const max = 50000

const randomNumber = ((max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min))

export const socialList: ISocial[] = [
  {
    type: "Likes",
    quantity: randomNumber(max, min),
    icon: "like",
    stat_icon: "stat_up",
    bg_color: '#2962FF',
  },
  {
    type: "Love",
    quantity: randomNumber(max, min),
    icon: "heart",
    stat_icon: "stat_fix",
    bg_color: '#FF3D00',
  },
  {
    type: "Smiles",
    quantity: randomNumber(max, min),
    icon: "smile",
    stat_icon: "stat_down",
    bg_color: '#FFC400'
  },
]