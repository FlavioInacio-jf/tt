import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePublisher1641506688417 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "publishers",
                columns: [
                    {
                        name : "id",
                        type : "uuid",
                        isPrimary : true
                    },
                    {
                        name : "publish",
                        type : "varchar"
                    },
                    {
                        name : "topic",
                        type : "varchar"
                    },
                    {
                        name: "oos",
                        type : "integer"
                    },
                    {
                        name : "color",
                        type : "varchar"
                    },
                    {
                        name : "created_at",
                        type : "timestamp",
                        default : "now()"
                    },
                    {
                        name : "id_client",
                        type : "uuid"
                    }
            ],
            foreignKeys : [
                {
                    name : "FKClientPublish",
                    referencedTableName : "clients",
                    referencedColumnNames : ["id"],
                    columnNames : ["id_client"],
                    onDelete : "SET NULL",
                    onUpdate : "SET NULL"

                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("publishers")
    }

}
