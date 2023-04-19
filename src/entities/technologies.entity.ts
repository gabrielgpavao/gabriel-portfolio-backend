import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { tTechNameEnum } from '../interfaces/projects.interfaces';

export const TECHNAME = [
	'React',
	'React Native',
	'React-Router',
	'React-Hook-Form',
	'ContextAPI',
	'Next',
	'Redux',
	'TypeScript',
	'JavaScript',
	'Styled-Components',
	'SASS',
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
	name: tTechNameEnum;
}
