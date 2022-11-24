import SKILLS from '../../data/Skills'
import { Skills } from '../../domain/model/Skills'
import { RepositorySkillsInMemory } from '../../infrastructure/datasource/Skills/in_memory'
import { migrate } from './migrate'

const skills = new Skills(new RepositorySkillsInMemory())

const err = migrate(skills, SKILLS)
if (err != null) {
  throw err
}

export const getSkills = () => skills.found()
