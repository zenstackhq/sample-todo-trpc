/*
  Warnings:

  - You are about to drop the column `zenstack_transaction` on the `Account` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Account_zenstack_transaction_idx";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "zenstack_transaction";
