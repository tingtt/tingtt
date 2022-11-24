import { Genre, Skill } from '../../domain/model/Skills/@types'

const genreFrontend: Genre = {
  name: 'Front-end',
  borderColor: 'rgba(0, 206, 201, 1.0)',
  bgColor: 'rgba(0, 206, 201, 0.2)',
}
const genreBackend: Genre = {
  name: 'Back-end',
  borderColor: 'rgba(0, 184, 148, 1.0)',
  bgColor: 'rgba(0, 184, 148, 0.2)',
}
const genreDevelopmemt: Genre = {
  name: 'Development',
  borderColor: 'rgba(232, 67, 147, 1.0)',
  bgColor: 'rgba(232, 67, 147, 0.2)',
}
const genreInfrastructure: Genre = {
  name: 'Infrastructure',
  borderColor: 'rgba(253, 203, 110, 1.0)',
  bgColor: 'rgba(253, 203, 110, 0.2)',
}

const SKILLS: Skill[] = [
  // Front-end
  {
    name: 'Next.js',
    level: 5,
    genre: genreFrontend,
  },
  {
    name: 'TypeScript',
    level: 5,
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
    level: 2,
    genre: genreFrontend,
  },

  // Back-end
  {
    name: 'Go',
    level: 5,
    genre: genreBackend,
  },
  {
    name: 'Echo',
    level: 5,
    genre: genreBackend,
  },
  {
    name: 'Java',
    level: 1,
    genre: genreBackend,
  },
  {
    name: 'MySQL',
    level: 5,
    genre: genreBackend,
  },
  {
    name: 'OpenAPI',
    level: 5,
    genre: genreBackend,
  },
  {
    name: 'gRPC',
    level: 3,
    genre: genreBackend,
  },

  // Development
  {
    name: 'Clean Architecture',
    level: 4,
    genre: genreDevelopmemt,
  },
  {
    name: 'git',
    level: 5,
    genre: genreDevelopmemt,
  },
  {
    name: 'GitHub',
    level: 5,
    genre: genreDevelopmemt,
  },
  {
    name: 'GitLab',
    level: 5,
    genre: genreDevelopmemt,
  },
  {
    name: 'Docker',
    level: 5,
    genre: genreDevelopmemt,
  },
  {
    name: 'Makefile',
    level: 4,
    genre: genreDevelopmemt,
  },

  // Infrastructure
  {
    name: 'Kubernetes',
    level: 5,
    genre: genreInfrastructure,
  },
  {
    name: 'DevOps',
    level: 5,
    genre: genreInfrastructure,
  },
  {
    name: 'Ubuntu',
    level: 3,
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
    name: 'AWS',
    level: 3,
    genre: genreInfrastructure,
  },
]

export default SKILLS
