import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1679862419933 implements MigrationInterface {
    name = 'initialMigration1679862419933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(16) NOT NULL, "description" character varying(150) NOT NULL, "responsive" boolean NOT NULL, "link" character varying NOT NULL, "repository" character varying NOT NULL, "backgroundImg" character varying NOT NULL, CONSTRAINT "UQ_7d09119db93bd1295f73f5d116b" UNIQUE ("link"), CONSTRAINT "UQ_8c23045eccea6fca6cbdb14a14b" UNIQUE ("repository"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."technologies_name_enum" AS ENUM('React', 'React Native', 'TypeScript', 'JavaScript', 'Styled-Components', 'Node', 'Express', 'Python', 'Django', 'Flask', 'PostgreSQL', 'HTML', 'CSS', 'Git', 'GitHub')`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" "public"."technologies_name_enum" NOT NULL, CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects_technologies_technologies" ("projectsId" integer NOT NULL, "technologiesId" integer NOT NULL, CONSTRAINT "PK_77d95d8b7c4c6875e8edba2a937" PRIMARY KEY ("projectsId", "technologiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_673d02c381e5ca853bb1fd0113" ON "projects_technologies_technologies" ("projectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a6ec65771cb490a29fea3917f0" ON "projects_technologies_technologies" ("technologiesId") `);
        await queryRunner.query(`ALTER TABLE "projects_technologies_technologies" ADD CONSTRAINT "FK_673d02c381e5ca853bb1fd01133" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "projects_technologies_technologies" ADD CONSTRAINT "FK_a6ec65771cb490a29fea3917f0b" FOREIGN KEY ("technologiesId") REFERENCES "technologies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects_technologies_technologies" DROP CONSTRAINT "FK_a6ec65771cb490a29fea3917f0b"`);
        await queryRunner.query(`ALTER TABLE "projects_technologies_technologies" DROP CONSTRAINT "FK_673d02c381e5ca853bb1fd01133"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6ec65771cb490a29fea3917f0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_673d02c381e5ca853bb1fd0113"`);
        await queryRunner.query(`DROP TABLE "projects_technologies_technologies"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_name_enum"`);
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
