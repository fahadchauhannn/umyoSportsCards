export class Package {
    id: number;
    price: string;
    net_price: string;
    description: string;
    image: string | null;
    limit: number;
    expire_in: string;
    logo: string;
    product_image: string;
    social_media_listing: string;
    website: string;
    videos: string;
    stripe_product_id: string | null;
    stripe_price_id: string | null;
    created_at: string;
    updated_at: string;
    vimeo: string;
    umyotube: string;

    constructor(
        id: number,
        price: string,
        net_price: string,
        description: string,
        image: string | null,
        limit: number,
        expire_in: string,
        logo: string,
        product_image: string,
        social_media_listing: string,
        website: string,
        videos: string,
        stripe_product_id: string | null,
        stripe_price_id: string | null,
        created_at: string,
        updated_at: string,
        vimeo: string,
        umyotube: string
    ) {
        this.id = id;
        this.price = price;
        this.net_price = net_price;
        this.description = description;
        this.image = image;
        this.limit = limit;
        this.expire_in = expire_in;
        this.logo = logo;
        this.product_image = product_image;
        this.social_media_listing = social_media_listing;
        this.website = website;
        this.videos = videos;
        this.stripe_product_id = stripe_product_id;
        this.stripe_price_id = stripe_price_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.vimeo = vimeo;
        this.umyotube = umyotube;
    }
}


