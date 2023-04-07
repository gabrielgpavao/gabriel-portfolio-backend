import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Technology } from './technologies.entity';

@Entity('projects')
export class Project {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ type: 'varchar', length: 16 })
	name: string;

	@Column({ type: 'varchar', length: 150})
	description: string;

	@Column({ type: 'boolean' })
	responsive: boolean;

	@Column({ type: 'varchar', unique: true })
	websiteUrl: string;

	@Column({ type: 'varchar', unique: true })
	repositoryUrl: string;

	@Column({ type: 'varchar' })
	backgroundImg: string;

	@ManyToMany(() => Technology)
	@JoinTable({
		name: 'project_technologies'
	})
	technologies: Technology[];
}
