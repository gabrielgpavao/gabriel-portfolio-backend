import { Repository } from 'typeorm'
import { Technology } from '../entities/technologies.entity'

type tTechRepo = Repository<Technology>

type tTechnologies = 'React' | 'React Native' | 'TypeScript' | 'JavaScript' | 'Styled-Components' | 'Node' | 'Express' | 'Python' | 'Django' | 'Flask' | 'PostgreSQL' | 'HTML' | 'CSS' | 'Git' | 'GitHub'

export {
	tTechRepo,
	tTechnologies
}