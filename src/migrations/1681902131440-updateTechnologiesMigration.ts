import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTechnologiesMigration1681902131440 implements MigrationInterface {
    name = 'updateTechnologiesMigration1681902131440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."technologies_name_enum" RENAME TO "technologies_name_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."technologies_name_enum" AS ENUM('React', 'React Native', 'Next', 'Redux', 'TypeScript', 'JavaScript', 'Styled-Components', 'SASS', 'Node', 'Express', 'Python', 'Django', 'Flask', 'PostgreSQL', 'SQLite', 'HTML', 'CSS', 'Git', 'GitHub')`);
        await queryRunner.query(`ALTER TABLE "technologies" ALTER COLUMN "name" TYPE "public"."technologies_name_enum" USING "name"::"text"::"public"."technologies_name_enum"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_name_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."technologies_name_enum_old" AS ENUM('React', 'React Native', 'TypeScript', 'JavaScript', 'Styled-Components', 'Node', 'Express', 'Python', 'Django', 'Flask', 'PostgreSQL', 'SQLite', 'HTML', 'CSS', 'Git', 'GitHub')`);
        await queryRunner.query(`ALTER TABLE "technologies" ALTER COLUMN "name" TYPE "public"."technologies_name_enum_old" USING "name"::"text"::"public"."technologies_name_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_name_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."technologies_name_enum_old" RENAME TO "technologies_name_enum"`);
    }

}
