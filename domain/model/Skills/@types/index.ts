export type Genre = {
  name: string
  color: string
}

export type Skill = {
  name: string
  level: number
  genre: Genre
}

export type GenreSkill = {
  level: number
} & Genre
