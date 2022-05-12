import {MigrationInterface, QueryRunner} from "typeorm";

export class apartmentHotelNotNullConstraint1652303173975 implements MigrationInterface {
    name = 'apartmentHotelNotNullConstraint1652303173975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" DROP CONSTRAINT "FK_fd7e52cafa261ddaaa15cfe5ae3"`);
        await queryRunner.query(`ALTER TABLE "apartments" ALTER COLUMN "hotelId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "apartments" ADD CONSTRAINT "FK_fd7e52cafa261ddaaa15cfe5ae3" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" DROP CONSTRAINT "FK_fd7e52cafa261ddaaa15cfe5ae3"`);
        await queryRunner.query(`ALTER TABLE "apartments" ALTER COLUMN "hotelId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "apartments" ADD CONSTRAINT "FK_fd7e52cafa261ddaaa15cfe5ae3" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
