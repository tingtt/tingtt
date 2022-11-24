import { Skill } from '../../domain/model/Skills/@types'

const genreFrontend = 'Front-end'
const genreBackend = 'Back-end'
const genreDevelopmemt = 'Development'
const genreInfrastructure = 'Infrastructure'

const SKILLS: Skill[] = [
  // Front-end
  {
    name: 'React.js / Next.js / TypeScript',
    level: 4.5,
    genre: genreFrontend,
  },
  {
    name: 'TailwindCSS / daisyUI',
    level: 4,
    genre: genreFrontend,
  },
  {
    name: 'Swift / SwiftUI',
    level: 3,
    genre: genreFrontend,
  },
  {
    name: 'Flutter',
    level: 2.5,
    genre: genreFrontend,
  },
  {
    name: 'Atomic Design',
    level: 3,
    genre: genreFrontend,
  },
  {
    name: 'Figma',
    level: 3.5,
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
    name: 'Java / Spring Boot',
    level: 1,
    genre: genreBackend,
  },
  {
    name: 'MySQL',
    level: 4.5,
    genre: genreBackend,
  },
  {
    name: 'OpenAPI / Swagger',
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
    name: 'GitHub / GitHub Actions',
    level: 4.5,
    genre: genreDevelopmemt,
  },
  {
    name: 'GitLab / GitLab CI/CD',
    level: 4.5,
    genre: genreDevelopmemt,
  },
  {
    name: 'Docker / Dockder Compose',
    level: 4.8,
    genre: genreDevelopmemt,
  },
  {
    name: 'Clean Architecture (DDD, Layered Architecture)',
    level: 4,
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
    level: 4.5,
    genre: genreInfrastructure,
  },
  {
    name: 'ArgoCD (DevOps, GitOps)',
    level: 4.5,
    genre: genreInfrastructure,
  },
  {
    name: 'Linux - Debian (Ubuntu)',
    level: 3,
    genre: genreInfrastructure,
  },
  {
    name: 'Linux - RedHat (CentOS, AlmaLinux)',
    level: 2.5,
    genre: genreInfrastructure,
  },
  {
    name: 'DNS',
    level: 4,
    genre: genreInfrastructure,
  },
  {
    name: 'AWS',
    level: 2.5,
    genre: genreInfrastructure,
  },
]

export default SKILLS
