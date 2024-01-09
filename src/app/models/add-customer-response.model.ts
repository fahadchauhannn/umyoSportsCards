export class AddCustomerResponse {
    status: string;
    message: string;
    customer_id: string;
    payment_id: string;
    payment_link_id: string;

    constructor(
        status: string,
        message: string,
        customer_id: string,
        payment_id: string,
        payment_link_id: string
    ) {
        this.status = status;
        this.message = message;
        this.customer_id = customer_id;
        this.payment_id = payment_id;
        this.payment_link_id = payment_link_id;
    }
}

