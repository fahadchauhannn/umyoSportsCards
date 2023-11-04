import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = "https://flyeats.co.uk/umy/public/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getAllUsers(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdW15b3Nwb3J0c2NhcmRzLmNvbVwvYXBpX3VteW9jYXJkc1wvcHVibGljXC9hcGlcL2F1dGhcL2FkbWluU2lnbkluIiwiaWF0IjoxNjk2Mjk0NzYzLCJleHAiOjE2OTYyOTgzNjMsIm5iZiI6MTY5NjI5NDc2MywianRpIjoib3lROG13dWtmVU5PUDgxaiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F4KiTeEqxw6roZVfPrvVhZEwaEtwBikArzn5I7bAlEA'}`,
    });

    return this.http.post('https://umyosportscards.com/api_umyocards/public/api/getAllUsers', {}, { headers });
  }
  getSupportAgent(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdW15b3Nwb3J0c2NhcmRzLmNvbVwvYXBpX3VteW9jYXJkc1wvcHVibGljXC9hcGlcL2F1dGhcL2FkbWluU2lnbkluIiwiaWF0IjoxNjk2Mjk0NzYzLCJleHAiOjE2OTYyOTgzNjMsIm5iZiI6MTY5NjI5NDc2MywianRpIjoib3lROG13dWtmVU5PUDgxaiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F4KiTeEqxw6roZVfPrvVhZEwaEtwBikArzn5I7bAlEA'}`,
    });

    return this.http.post('https://umyosportscards.com/api_umyocards/public/api/getSupportAgent', {}, { headers });
  }
  getPackages(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdW15b3Nwb3J0c2NhcmRzLmNvbVwvYXBpX3VteW9jYXJkc1wvcHVibGljXC9hcGlcL2F1dGhcL2FkbWluU2lnbkluIiwiaWF0IjoxNjk2Mjk0NzYzLCJleHAiOjE2OTYyOTgzNjMsIm5iZiI6MTY5NjI5NDc2MywianRpIjoib3lROG13dWtmVU5PUDgxaiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F4KiTeEqxw6roZVfPrvVhZEwaEtwBikArzn5I7bAlEA'}`,
    });

    return this.http.post('https://umyosportscards.com/api_umyocards/public/api/getPackages', {}, { headers });
  }
  getReferals(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdW15b3Nwb3J0c2NhcmRzLmNvbVwvYXBpX3VteW9jYXJkc1wvcHVibGljXC9hcGlcL2F1dGhcL2FkbWluU2lnbkluIiwiaWF0IjoxNjk2Mjk0NzYzLCJleHAiOjE2OTYyOTgzNjMsIm5iZiI6MTY5NjI5NDc2MywianRpIjoib3lROG13dWtmVU5PUDgxaiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F4KiTeEqxw6roZVfPrvVhZEwaEtwBikArzn5I7bAlEA'}`,
    });

    return this.http.post('https://umyosportscards.com/api_umyocards/public/api/listOfReferals', {}, { headers });
  }
  getChatRecord(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdW15b3Nwb3J0c2NhcmRzLmNvbVwvYXBpX3VteW9jYXJkc1wvcHVibGljXC9hcGlcL2F1dGhcL2FkbWluU2lnbkluIiwiaWF0IjoxNjk2Mjk0NzYzLCJleHAiOjE2OTYyOTgzNjMsIm5iZiI6MTY5NjI5NDc2MywianRpIjoib3lROG13dWtmVU5PUDgxaiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F4KiTeEqxw6roZVfPrvVhZEwaEtwBikArzn5I7bAlEA'}`,
    });

    return this.http.post('https://umyosportscards.com/api_umyocards/public/api/getChatRecord', {}, { headers });
  }











  getUserById(userId: number): Observable<any> {
    const url = baseUrl+`userData`;
    const payload = { user_id: userId.toString() };


    return this.http.post(url, payload);
  }



  private customHeaders = new HttpHeaders()
    .set('Origin', 'https://umyosportscards.com')
    .set('Referer', 'https://umyosportscards.com/admin/users/272');

  updateUser(user: any): Observable<any> {
    const url = baseUrl+`editUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, user, { headers: combinedHeaders });
  }

  applyForReferral(user_id: any): Observable<any> {
    const url = baseUrl+`applyForReferral`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, {"user_id": user_id}, { headers: combinedHeaders });
  }
  savePaymentInfo(user_id: any,payment_id:any,payment_type:any): Observable<any> {
    const url = baseUrl+`savePaymentInfo`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, {"user_id": user_id,"payment_id":payment_id,"payment_type":payment_type}, { headers: combinedHeaders });
  }
  changePassword(email: any,old_password:any,new_password:any): Observable<any> {
    const url = baseUrl+`changePassword`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, {"email": email,"old_password":old_password,"new_password":new_password}, { headers: combinedHeaders });
  }
  cancelSubscription(user_id: any,agreement_id:any): Observable<any> {
    const url = baseUrl+`cancel-paypal-subscription`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, {"user_id": user_id,"agreement_id":agreement_id}, { headers: combinedHeaders });
  }
  getActivity(user_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/getActivity`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, {"user_id": user_id}, { headers: combinedHeaders });
  }
  deleteActivity(user_id: any,activity_id): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/deleteActivity`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, {"user_id": user_id,"activity_id":activity_id}, { headers: combinedHeaders });
  }

  



  openChat(chat_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/getLiveChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "chat_id": chat_id }, { headers: combinedHeaders });
  }
  startLiveChat(email: string,name:string): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/startLiveChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "email": email,"name":name }, { headers: combinedHeaders });
  }



  getSignUpPackages(user_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/getPackages`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "chat_id": user_id }, { headers: combinedHeaders });
  }



  usage(): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/Usage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { headers: combinedHeaders });
  }

  deleteUser(user_id: any): Observable<any> {
    const url = `
  https://umyosportscards.com/api_umyocards/public/api/deleteUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "user_id": user_id }, { headers: combinedHeaders });
  }
  deletePackage(id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/deletePackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "id": id }, { headers: combinedHeaders });
  }



  deleteAgent(agent_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/deleteSupportAgent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "id": agent_id }, { headers: combinedHeaders });
  }

  searchCard(busniess_type:any,age_type:any,sports_type:any,position:any,state:any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/get-search-card-by-dropdown`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token', 
    });
  
    
  
    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');
    
    return this.http.post(url, {"business_type":busniess_type,"age_type":age_type,"sport_type":sports_type,"position":position,"state":state}, { headers: combinedHeaders });
  
  
  }

  saveChat(chat_id: any, chat: any, message_type: any, responded_by_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/saveLiveChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "chat_id": chat_id, "chat": chat, "message_type": message_type, "respond_by_id": responded_by_id }, { headers: combinedHeaders });

  }

  emailChat(chat_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/emailChats`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "chat_id": chat_id}, { headers: combinedHeaders });

  }
  closeChat(chat_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/closeChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "chat_id": chat_id}, { headers: combinedHeaders });

  }

  

  publicLogin(email: any, package_id: any, password: any,): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/auth/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "email": email, "package_id": package_id, "password": password, }, { headers: combinedHeaders });


  }

  getPositionType(category_id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/subcategory-position`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');

    return this.http.post(url, { "category_id": category_id }, { headers: combinedHeaders });


  }
  getBusinessType(): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/all-categories`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');

    return this.http.post(url, {}, { headers: combinedHeaders });


  }
  getSportType(): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/main-category-sport-type`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');

    return this.http.post(url, {}, { headers: combinedHeaders });


  }
  getAgeType(): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/subcategories-age-type`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');

    return this.http.post(url, {}, { headers: combinedHeaders });


  }








  addAgent(name: any, email: any, password: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/addSupportAgent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "name": name, "email": email, "password": password }, { headers: combinedHeaders });

  }

  addPackage(id: any, description: any, expire_in: any, image: any, limit: any, logo: any, net_price: any, price: any, product_image: any, social_media_listing: any, umyoutube: any, vimeo: any, videos: any, website: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/createPackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "id": id, "description": description, "expire_in": expire_in, "image": image, "limit": limit, "logo": logo, "net_price": net_price, "price": price, "product_image": product_image, "social_media_listing": social_media_listing, "umyotube": umyoutube, "vimeo": vimeo, "videos": videos, "website": website }, { headers: combinedHeaders });

  }
  updateAgent(name: any, email: any, id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/updateSupportAgent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "name": name, "email": email, "id": id }, { headers: combinedHeaders });

  }
  getPackageById(id: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/getPackageSingle`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "id": id }, { headers: combinedHeaders });

  }

  updatePackage(id: any, description: any, expire_in: any, image: any, limit: any, logo: any, net_price: any, price: any, product_image: any, social_media_listing: any, umyoutube: any, vimeo: any, videos: any, website: any): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/updatePackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { "id": id, "description": description, "expire_in": expire_in, "image": image, "limit": limit, "logo": logo, "net_price": net_price, "price": price, "product_image": product_image, "social_media_listing": social_media_listing, "umyotube": umyoutube, "vimeo": vimeo, "videos": videos, "website": website }, { headers: combinedHeaders });

  }





  getChatUsers(): Observable<any> {
    const url = `https://umyosportscards.com/api_umyocards/public/api/getOpenChatAdmin`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const combinedHeaders = headers
      .append('Origin', this.customHeaders.get('Origin') || '')
      .append('Referer', this.customHeaders.get('Referer') || '');


    return this.http.post(url, { headers: combinedHeaders });
  }







  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');
  }

  getFullCountryName(shortName: string, countries: any[]): string {
    const country = countries.find((c) => c.alpha2Code === shortName);
    return country ? country.name : shortName;
  }



  AddCustomer(Customer: any) {
    return this.http.post(baseUrl + "add-customer", Customer)
  }

  AddProductPriceSubscription(subscription: any) {
    return this.http.post(baseUrl + "add-product-price-subscription", subscription)
  }

  registerUser(userData: any) {
    return this.http.post(baseUrl + "auth/register", userData)
  }

  verifyEmailCode(data: any) {
    return this.http.post(baseUrl + "verify_code", data)
  }



}


