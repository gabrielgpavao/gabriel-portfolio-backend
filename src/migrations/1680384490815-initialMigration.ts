import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1680384490815 implements MigrationInterface {
    name = 'initialMigration1680384490815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(16) NOT NULL, "description" character varying(150) NOT NULL, "responsive" boolean NOT NULL, "link" character varying NOT NULL, "repository" character varying NOT NULL, "backgroundImg" character varying NOT NULL, CONSTRAINT "UQ_7d09119db93bd1295f73f5d116b" UNIQUE ("link"), CONSTRAINT "UQ_8c23045eccea6fca6cbdb14a14b" UNIQUE ("repository"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."technologies_name_enum" AS ENUM('React', 'React Native', 'TypeScript', 'JavaScript', 'Styled-Components', 'Node', 'Express', 'Python', 'Django', 'Flask', 'PostgreSQL', 'SQLite', 'HTML', 'CSS', 'Git', 'GitHub')`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" "public"."technologies_name_enum" NOT NULL, CONSTRAINT "UQ_46800813f460eb131823371caee" UNIQUE ("name"), CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_technologies" ("id" SERIAL NOT NULL, "projectId" integer, "technologyId" integer, CONSTRAINT "PK_cc34b25cf29da1b16045af51fbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "project_technologies" ADD CONSTRAINT "FK_060c20ff18e52766bce563b0523" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_technologies" ADD CONSTRAINT "FK_f8d58af88a6743390a911f257a7" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_technologies" DROP CONSTRAINT "FK_f8d58af88a6743390a911f257a7"`);
        await queryRunner.query(`ALTER TABLE "project_technologies" DROP CONSTRAINT "FK_060c20ff18e52766bce563b0523"`);
        await queryRunner.query(`DROP TABLE "project_technologies"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_name_enum"`);
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
