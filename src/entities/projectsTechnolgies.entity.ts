import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './projects.entity';
import { Technology } from './technologies.entity';

@Entity('project_technologies')
export class ProjectTechnology {
	@PrimaryGeneratedColumn()
	id: number;
	
	@ManyToOne(() => Project)
	project: Project;

	@ManyToOne(() => Technology)
	technology: Technology;
}
