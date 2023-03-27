import { MigrationInterface, QueryRunner } from "typeorm";

export class addUniqueConstraintTechName1679942072017 implements MigrationInterface {
    name = 'addUniqueConstraintTechName1679942072017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "technologies" ADD CONSTRAINT "UQ_46800813f460eb131823371caee" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "technologies" DROP CONSTRAINT "UQ_46800813f460eb131823371caee"`);
    }

}
