import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessagesReceiver1641584282478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table ({
                name : "messages_receiver",
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
                        name: "id_subscriber",
                        type: "uuid"
                    }
                ],
                foreignKeys: [{
                    name:  "FKSubscriberReceiver",
                    referencedTableName: "subscribers",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_subscriber"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages_receiver")
    }

}

