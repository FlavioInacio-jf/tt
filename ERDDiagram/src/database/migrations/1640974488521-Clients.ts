import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Clients1640974488521 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name: "clients",
                columns: [
                    {
                        name : "id",
                        type : "uuid",
                        isPrimary : true,
                    },
                    {
                        name : "client",
                        type : "varchar"
                    },
                    {
                        name : "protocol",
                        type : "varchar"
                    },
                    {
                        name : "host",
                        type : "varchar"
                    },
                    {
                        name : "password",
                        type : "varchar"
                    },
                    {
                        name : "icon",
                        type : "integer"
                    },
                    {
                        name : "isWorking",
                        type : "boolean",
                        default : false

                    },

                    {
                        name : "created_at",
                        type : "timestamp",
                        default : "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable ("clients");
    }

}
