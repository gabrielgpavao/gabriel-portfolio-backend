import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1680777116349 implements MigrationInterface {
    name = 'initialMigration1680777116349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."technologies_name_enum" AS ENUM('React', 'React Native', 'TypeScript', 'JavaScript', 'Styled-Components', 'Node', 'Express', 'Python', 'Django', 'Flask', 'PostgreSQL', 'SQLite', 'HTML', 'CSS', 'Git', 'GitHub')`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" "public"."technologies_name_enum" NOT NULL, CONSTRAINT "UQ_46800813f460eb131823371caee" UNIQUE ("name"), CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(16) NOT NULL, "description" character varying(150) NOT NULL, "responsive" boolean NOT NULL, "websiteUrl" character varying NOT NULL, "repositoryUrl" character varying NOT NULL, "backgroundImg" character varying NOT NULL, CONSTRAINT "UQ_2ed1ee39c0f5fa516898339a6fe" UNIQUE ("websiteUrl"), CONSTRAINT "UQ_26e6959a57266eb943a3b733bb1" UNIQUE ("repositoryUrl"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_name_enum"`);
    }

}
