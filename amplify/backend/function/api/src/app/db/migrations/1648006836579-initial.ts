import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1648006836579 implements MigrationInterface {
    name = 'initial1648006836579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "isAdditional" boolean NOT NULL, "totalPrice" integer NOT NULL, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hotels" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "stars" smallint NOT NULL, "floorsTotal" smallint NOT NULL, "roomsForFloor" smallint array NOT NULL, CONSTRAINT "PK_2bb06797684115a1ba7c705fc7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."organisations_priority_enum" AS ENUM('3', '2', '1')`);
        await queryRunner.query(`CREATE TABLE "organisations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "priority" "public"."organisations_priority_enum" NOT NULL DEFAULT '1', CONSTRAINT "PK_7bf54cba378d5b2f1d4c10ef4df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "debts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, CONSTRAINT "REL_834960a509c776eb841644a9ba" UNIQUE ("userId"), CONSTRAINT "PK_4bd9f54aab9e59628a3a2657fa1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "complaints" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" text NOT NULL, "rate" smallint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_4b7566a2a489c2cc7c12ed076ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'moderator', 'client')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cognitoId" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'client', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "organisationId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."rents_paymentstatus_enum" AS ENUM('1', '2', '3', '4')`);
        await queryRunner.query(`CREATE TABLE "rents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "processingTime" TIMESTAMP WITH TIME ZONE NOT NULL, "expirationTime" TIMESTAMP WITH TIME ZONE NOT NULL, "totalPrice" integer NOT NULL, "paymentStatus" "public"."rents_paymentstatus_enum" NOT NULL DEFAULT '4', "isReservation" boolean NOT NULL, "userId" uuid, "apartmentId" uuid, CONSTRAINT "PK_43a9961f1448a8d75f9b25156ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "apartments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "floor" smallint NOT NULL, "roomsTotal" smallint NOT NULL, "pricePerDay" integer NOT NULL, "hotelId" uuid, CONSTRAINT "PK_f6058e85d6d715dbe22b72fe722" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services_hotels" ("serviceId" uuid NOT NULL, "hotelId" uuid NOT NULL, CONSTRAINT "PK_50a9cf6bb4012a000b2a80ccab5" PRIMARY KEY ("serviceId", "hotelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fe232df3c680e89c24db903504" ON "services_hotels" ("serviceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_89aa81a7c84011fd675049345f" ON "services_hotels" ("hotelId") `);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_834960a509c776eb841644a9bac" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "complaints" ADD CONSTRAINT "FK_4b5fb19c320cd50b6e4faf998a9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4bba96961e0142c06aa921ce27f" FOREIGN KEY ("organisationId") REFERENCES "organisations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_81bc567fa332f1fffe1df4e9ae6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_10c084a07af34c5405d78090d07" FOREIGN KEY ("apartmentId") REFERENCES "apartments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartments" ADD CONSTRAINT "FK_fd7e52cafa261ddaaa15cfe5ae3" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services_hotels" ADD CONSTRAINT "FK_fe232df3c680e89c24db903504e" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "services_hotels" ADD CONSTRAINT "FK_89aa81a7c84011fd675049345f0" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services_hotels" DROP CONSTRAINT "FK_89aa81a7c84011fd675049345f0"`);
        await queryRunner.query(`ALTER TABLE "services_hotels" DROP CONSTRAINT "FK_fe232df3c680e89c24db903504e"`);
        await queryRunner.query(`ALTER TABLE "apartments" DROP CONSTRAINT "FK_fd7e52cafa261ddaaa15cfe5ae3"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_10c084a07af34c5405d78090d07"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_81bc567fa332f1fffe1df4e9ae6"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4bba96961e0142c06aa921ce27f"`);
        await queryRunner.query(`ALTER TABLE "complaints" DROP CONSTRAINT "FK_4b5fb19c320cd50b6e4faf998a9"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_834960a509c776eb841644a9bac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_89aa81a7c84011fd675049345f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fe232df3c680e89c24db903504"`);
        await queryRunner.query(`DROP TABLE "services_hotels"`);
        await queryRunner.query(`DROP TABLE "apartments"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`DROP TYPE "public"."rents_paymentstatus_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "complaints"`);
        await queryRunner.query(`DROP TABLE "debts"`);
        await queryRunner.query(`DROP TABLE "organisations"`);
        await queryRunner.query(`DROP TYPE "public"."organisations_priority_enum"`);
        await queryRunner.query(`DROP TABLE "hotels"`);
        await queryRunner.query(`DROP TABLE "services"`);
    }

}
