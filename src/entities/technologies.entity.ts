import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { tTechnologies } from '../interfaces/technologies.interfaces';

const technologiesList: Array<tTechnologies> = [
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
	'HTML',
	'CSS',
	'Git',
	'GitHub'
]

@Entity('technologies')
export class Technology {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ type: 'enum', enum: technologiesList })
	name: string;
}
