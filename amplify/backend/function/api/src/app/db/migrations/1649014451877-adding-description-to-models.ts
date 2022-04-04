import {MigrationInterface, QueryRunner} from "typeorm";

export class addingDescriptionToModels1649014451877 implements MigrationInterface {
    name = 'addingDescriptionToModels1649014451877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotels" RENAME COLUMN "roomsForFloor" TO "description"`);
        await queryRunner.query(`ALTER TABLE "apartments" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "apartments" ADD "availableCount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hotels" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "hotels" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotels" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "hotels" ADD "description" smallint array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "apartments" DROP COLUMN "availableCount"`);
        await queryRunner.query(`ALTER TABLE "apartments" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "hotels" RENAME COLUMN "description" TO "roomsForFloor"`);
    }

}
