import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Project } from './projects.entity';
import { ProjectTechnology } from './projectsTechnolgies.entity';

export const TECHNAME = [
	'React',
	'React Native',
	'TypeScript',
	'JavaScript',
	'Styled-Components',
	'Node',
	'Express',
	'Python',
	'Django',
	'Flask',
	'PostgreSQL',
	'SQLite',
	'HTML',
	'CSS',
	'Git',
	'GitHub'
] as const

@Entity('technologies')
export class Technology {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ type: 'enum', enum: TECHNAME, unique: true })
	name: string;

	@OneToMany(() => ProjectTechnology, (projectTech) => projectTech.technology)
	projects: Array<Project>;
}
