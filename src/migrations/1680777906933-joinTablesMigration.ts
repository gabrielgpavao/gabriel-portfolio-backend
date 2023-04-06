import { MigrationInterface, QueryRunner } from "typeorm";

export class joinTablesMigration1680777906933 implements MigrationInterface {
    name = 'joinTablesMigration1680777906933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project_technologies" ("projectsId" integer NOT NULL, "technologiesId" integer NOT NULL, CONSTRAINT "PK_253feefe71a084f01e94c9a6f04" PRIMARY KEY ("projectsId", "technologiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2c6a0be5869d1a8bb93482b06e" ON "project_technologies" ("projectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3ac55320251380da4885c98863" ON "project_technologies" ("technologiesId") `);
        await queryRunner.query(`ALTER TABLE "project_technologies" ADD CONSTRAINT "FK_2c6a0be5869d1a8bb93482b06e2" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project_technologies" ADD CONSTRAINT "FK_3ac55320251380da4885c988631" FOREIGN KEY ("technologiesId") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_technologies" DROP CONSTRAINT "FK_3ac55320251380da4885c988631"`);
        await queryRunner.query(`ALTER TABLE "project_technologies" DROP CONSTRAINT "FK_2c6a0be5869d1a8bb93482b06e2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3ac55320251380da4885c98863"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c6a0be5869d1a8bb93482b06e"`);
        await queryRunner.query(`DROP TABLE "project_technologies"`);
    }

}
