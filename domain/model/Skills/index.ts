import { Skill } from './@types'

export class Skills {
  private repo: RepositorySkills

  constructor(repository: RepositorySkills) {
    this.repo = repository
  }

  add(s: Skill) {
    // validate
    const [skills, err] = this.found()
    if (err != null) {
      return err
    }
    if (skills.filter(({ name }) => name == s.name).length == 1) {
      return new Error(`'Skill' "${s.name}" already exists`)
    }

    // add
    return this.repo.add(s)
  }
  found() {
    return this.repo.find()
  }
  fundOne(name: string) {
    return this.repo.findOne(name)
  }
}

export interface RepositorySkills {
  add(s: Skill): Error | null
  find(): [Skill[], Error | null]
  findOne(name: string): [Skill | undefined, Error | null]
}
