export interface registerResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: User;
    status: number;
    message:string
  }

  export interface User {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    gender: string | null;
    time_zone_country: string | null;
    time_zone_time: string | null;
    DOB: string | null;
    address: string | null;
    company: string | null;
    job_title: string | null;
    website: string | null;
    facebook_url: string | null;
    twitter_url: string | null;
    linkedin_url: string | null;
    youtube_url: string | null;
    city: string | null;
    country: string;
    profile_image: string | null;
    package_id: number;
    refer_code: string | null;
    reffered_from: string | null;
    date_of_expiry: string;
    verification_code: string;
    is_verified: string;
    payment_id: string | null;
    payment_method: string | null;
    user_type: string;
    login: string;
    business_type: string;
    sub_category: string | null;
    admin_text: string | null;
    balance_transaction: string | null;
    balance_transaction_type: string | null;
    stripe_customer_id: string | null;
    stripe_subscription_id: string | null;
    plan_id: string | null;
    subscription_id: string | null;
    subscription_status: string;
    sport_type: string;
    age_type: string;
    state: string;
    position: string;
  }
  