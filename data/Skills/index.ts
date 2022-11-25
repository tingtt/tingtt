import { Genre, Skill } from '../../domain/model/Skills/@types'

const genreFrontend: Genre = {
  name: 'Front-end',
  color: '#00cec9',
}
const genreBackend: Genre = {
  name: 'Back-end',
  color: '#00b894',
}
const genreDevelopmemt: Genre = {
  name: 'Development',
  color: '#e84393',
}
const genreInfrastructure: Genre = {
  name: 'Infrastructure',
  color: '#fdcb6e',
}

const SKILLS: Skill[] = [
  // Front-end
  {
    name: 'TypeScript',
    level: 4.5,
    genre: genreFrontend,
  },
  {
    name: 'Next.js',
    level: 4.5,
    genre: genreFrontend,
  },
  {
    name: 'Tailwind',
    level: 4,
    genre: genreFrontend,
  },
  {
    name: 'AtomicDesign',
    level: 3,
    genre: genreFrontend,
  },
  {
    name: 'Figma',
    level: 4,
    genre: genreFrontend,
  },
  {
    name: 'Flutter',
    level: 2.5,
    genre: genreFrontend,
  },

  // Back-end
  {
    name: 'Go',
    level: 4.5,
    genre: genreBackend,
  },
  {
    name: 'Echo',
    level: 4.5,
    genre: genreBackend,
  },
  {
    name: 'Java',
    level: 1.5,
    genre: genreBackend,
  },
  {
    name: 'MySQL',
    level: 4,
    genre: genreBackend,
  },
  {
    name: 'OpenAPI',
    level: 4.5,
    genre: genreBackend,
  },
  {
    name: 'gRPC',
    level: 3,
    genre: genreBackend,
  },

  // Development
  {
    name: 'git',
    level: 5,
    genre: genreDevelopmemt,
  },
  {
    name: 'GitHub',
    level: 4.5,
    genre: genreDevelopmemt,
  },
  {
    name: 'GitLab',
    level: 4.5,
    genre: genreDevelopmemt,
  },
  {
    name: 'Clean Architecture',
    level: 4,
    genre: genreDevelopmemt,
  },
  {
    name: 'Docker',
    level: 5,
    genre: genreDevelopmemt,
  },
  {
    name: 'Makefile',
    level: 4.5,
    genre: genreDevelopmemt,
  },

  // Infrastructure
  {
    name: 'Kubernetes',
    level: 4.5,
    genre: genreInfrastructure,
  },
  {
    name: 'DevOps',
    level: 4,
    genre: genreInfrastructure,
  },
  {
    name: 'Ubuntu',
    level: 3.5,
    genre: genreInfrastructure,
  },
  {
    name: 'CentOS / AlmaLinux',
    level: 3,
    genre: genreInfrastructure,
  },
  {
    name: 'DNS',
    level: 4,
    genre: genreInfrastructure,
  },
  {
    name: 'Terraform',
    level: 3,
    genre: genreInfrastructure,
  },
]

export default SKILLS
