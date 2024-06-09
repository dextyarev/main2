import { OrderStatus } from "@prisma/client"

export const getOrderStatus = (orderStatus: OrderStatus) => {

    return {
        [OrderStatus.PAYMENT_CONFIRMED]: "Оплата получена",
        [OrderStatus.WAITING_FOR_PAYMENT]: "Ожидает оплаты",
        [OrderStatus.DELIVERY]: "Доставляется",
        [OrderStatus.CONFIRMED]: "Завершен",
        [OrderStatus.DISCARDED]: "Отменен",
    }[orderStatus]
}
