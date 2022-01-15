import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSubscribers1641553652379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name : "subscribers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "subscriber",
                        type: "varchar"
                    },
                    {
                        name: "topic",
                        type: "varchar"
                    },
                    {
                        name: "oos",
                        type: "integer"
                    },
                    {
                        name: "color",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "id_client",
                        type: "uuid"
                    }
                ],
                foreignKeys : [
                    {
                        name: "FKClientSubscriber",
                        referencedTableName: "clients",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_client"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subscribers")
    }

}
