import SKILLS from '..'
import { migrate } from '../../../application/Skills/migrate'
import { Skills } from '../../../domain/model/Skills'
import { RepositorySkillsInMemory } from '../../../infrastructure/datasource/Skills/in_memory'

it('skill data not contain duplicate name or another genre color with same genre name', () => {
  expect(migrate(new Skills(new RepositorySkillsInMemory()), SKILLS)).toBe(null)
})
