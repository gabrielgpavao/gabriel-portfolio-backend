import { Repository } from 'typeorm';
import { Project } from '../entities/projects.entity';

type tProjectRepo = Repository<Project>

export {
	tProjectRepo
}
