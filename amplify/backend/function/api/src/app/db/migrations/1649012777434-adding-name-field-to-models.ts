import {MigrationInterface, QueryRunner} from "typeorm";

export class addingNameFieldToModels1649012777434 implements MigrationInterface {
    name = 'addingNameFieldToModels1649012777434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotels" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "organisations" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "totalPrice" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "complaints" ADD "title" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "apartments" ADD "name" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "complaints" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "organisations" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "hotels" DROP COLUMN "name"`);
    }

}
