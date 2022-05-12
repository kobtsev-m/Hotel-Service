import {MigrationInterface, QueryRunner} from "typeorm";

export class apartmentPricePerDayCheckConstraint1652303401860 implements MigrationInterface {
    name = 'apartmentPricePerDayCheckConstraint1652303401860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" ADD CONSTRAINT "CHK_9ddf0a0b18c77f00f7eb986a6d" CHECK ("pricePerDay" > 0)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" DROP CONSTRAINT "CHK_9ddf0a0b18c77f00f7eb986a6d"`);
    }

}
