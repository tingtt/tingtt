import SKILLS from '../../data/Skills'
import { Skills } from '../../domain/model/Skills'
import { Genre, GenreSkill, Skill } from '../../domain/model/Skills/@types'
import { RepositorySkillsInMemory } from '../../infrastructure/datasource/Skills/in_memory'
import { migrate } from './migrate'

const skills = new Skills(new RepositorySkillsInMemory())

const err = migrate(skills, SKILLS)
if (err != null) {
  throw err
}

export const getSkills = () => skills.found()
export const getSkillGenres = (): [Genre[], Error | null] => {
  const [ss, err] = skills.found()
  if (err != null) {
    return [[], err]
  }

  const genres: Genre[] = []
  ss.forEach(({ genre }) => {
    if (genres.find((g) => g.name == genre.name) == undefined) {
      genres.push(genre)
    }
  })

  return [genres, null]
}

export const getSkillsGroupedByGenre = (): [
  { genre: Genre; skills: Skill[] }[],
  Error | null
] => {
  const [skills, errSkills] = getSkills()
  if (errSkills != null) {
    return [[], errSkills]
  }

  const [genres, errSkillGenres] = getSkillGenres()
  if (errSkillGenres != null) {
    return [[], errSkillGenres]
  }

  return [
    genres.map((genre) => {
      return {
        genre,
        skills: skills.filter(({ genre: g }) => genre.name == g.name),
      }
    }),
    errSkillGenres,
  ]
}

export const getSkillsAggregatedByGenre = (): [GenreSkill[], Error | null] => {
  const [genres, err] = getSkillsGroupedByGenre()
  if (err != null) {
    return [[], err]
  }

  return [
    genres.map((g) => {
      return {
        ...g.genre,
        level: g.skills.reduce((a, c) => a + c.level, 0),
      }
    }),
    null,
  ]
}
