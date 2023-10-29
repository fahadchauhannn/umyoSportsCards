export class Subscription {
    status: string;
    message: string;
    product_id: string;
    price_id: string;
    subscription_id: string;

    constructor(
        status: string,
        message: string,
        product_id: string,
        price_id: string,
        subscription_id: string
    ) {
        this.status = status;
        this.message = message;
        this.product_id = product_id;
        this.price_id = price_id;
        this.subscription_id = subscription_id;
    }
}
