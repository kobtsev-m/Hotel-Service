import {MigrationInterface, QueryRunner} from "typeorm";

export class addingDescriptionToService1649021649511 implements MigrationInterface {
    name = 'addingDescriptionToService1649021649511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "description"`);
    }

}
