import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessagesSend1641584260345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name : "messages_send",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "id_publishe",
                        type: "uuid"
                    }
                ],
                foreignKeys: [{
                    name:  "FKPublishSend",
                    referencedTableName: "publishers",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_publishe"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages_send")
    }

}
