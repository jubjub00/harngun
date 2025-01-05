-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'PAID');

-- CreateTable
CREATE TABLE "payment_items" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "created_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(3) NOT NULL,
    "item_name" TEXT NOT NULL,
    "item_price" INTEGER NOT NULL,
    "divisor_key" TEXT NOT NULL,
    "payments_key" TEXT NOT NULL,

    CONSTRAINT "payment_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "created_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "slip_img" TEXT,
    "payment_dt" TIMESTAMP(3) NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "payer_name" TEXT NOT NULL,
    "reporter_name" TEXT NOT NULL,
    "vat" INTEGER NOT NULL,
    "service_charge" INTEGER NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "created_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(3) NOT NULL,
    "img" TEXT,
    "telegram_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_items_key_key" ON "payment_items"("key");

-- CreateIndex
CREATE UNIQUE INDEX "payments_key_key" ON "payments"("key");

-- CreateIndex
CREATE UNIQUE INDEX "users_key_key" ON "users"("key");

-- AddForeignKey
ALTER TABLE "payment_items" ADD CONSTRAINT "payment_items_divisor_key_fkey" FOREIGN KEY ("divisor_key") REFERENCES "users"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_items" ADD CONSTRAINT "payment_items_payments_key_fkey" FOREIGN KEY ("payments_key") REFERENCES "payments"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
