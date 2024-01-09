export class User {
    user_id: number ;
    firstname: string;
    lastname: string;
    email: string;
    stripe_subscription_id: string;
    balance_transaction_type: string;
    bonusAmount: number;
    payment_method: string;
    payment_id: string;
    myRefers: number;
    packagePrice:string
    gender:string|null
    DOB:string|null
    city:string|null
    country:string|null
    company:string|null
    job_title:string|null
    website:string|null
    facebook_url:string|null
    twitter_url:string|null
    linkedin_url:string|null
    youtube_url:string|null
    profile_image:string|null
    constructor(
        user_id: number,
        firstname: string,
        lastname: string,
        email: string,
        stripe_subscription_id: string,
        balance_transaction_type: string,
        bonusAmount: number,
        payment_method: string,
        payment_id: string,
        myRefers: number,
        packagePrice:string,
        gender:string|null,
        DOB:string|null,
        city:string|null,
        country:string|null,
        company:string|null,
        job_title:string|null,
        website:string|null,
        facebook_url:string|null,
        twitter_url:string|null,
        linkedin_url:string|null,
        youtube_url:string|null,
        profile_image:string|null,
    ) {

      this.user_id = user_id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.stripe_subscription_id = stripe_subscription_id;
      this.balance_transaction_type = balance_transaction_type;
      this.bonusAmount = bonusAmount;
      this.payment_method = payment_method;
      this.payment_id = payment_id;
      this.myRefers = myRefers;
      this.packagePrice=packagePrice;
      this.gender=gender
      this.DOB=DOB
      this.city=city
      this.country=country
      this.company =company
      this.job_title =job_title
      this.website=website
      this.facebook_url=facebook_url
      this.twitter_url=twitter_url
      this.linkedin_url=linkedin_url
      this.youtube_url=youtube_url
      this.profile_image=profile_image
    }
  }


  export class Pkg {
    id: number;
    price:string
    netPrice:string | null
    description: string;
    expire_in: string;
    limit: number;
    
  
    constructor(
        id: number,
        price:string,
        netPrice:string | null,
        description: string,
        expire_in: string,
        limit: number,
        
    ) {
      this.id = id;
     this.price=price
     this.netPrice=netPrice
     this.description=description
     this.expire_in=expire_in
     this.limit=limit
    }
  }




  export class Agent {
    id: number;
    name:string
    email:string
    
    
  
    constructor(
        id: number,
        name:string,
        email:string,
        
        
    ) {
      this.id = id;
     this.name=name
     this.email=email
    
    }
  }
  export class ChatRecord {
    id: number;
    name:string
    email:string
    
    
  
    constructor(
        id: number,
        name:string,
        email:string,
        
        
    ) {
      this.id = id;
     this.name=name
     this.email=email
    
    }
  }

  export class Amount {
    id: number;
    ReferalCode:string
    PurchasedDate:string
    referalEmail:string
    whoPurchased:string
    totalPackageAmount:string
    bonusAmount:string
    status:string
    
    
  
    constructor(
        id: number,
        PurchasedDate:string,
        referalEmail:string,
        whoPurchased:string,
        totalPackageAmount:string,
        bonusAmount:string,
        status:string,
        ReferalCode:string
        
    ) {
      this.id = id;
     this.PurchasedDate=PurchasedDate
     this.referalEmail=referalEmail
     this.whoPurchased=whoPurchased
     this.totalPackageAmount=totalPackageAmount
     this.bonusAmount=bonusAmount
     this.status=status
     this.ReferalCode=ReferalCode
    
    }
  }



