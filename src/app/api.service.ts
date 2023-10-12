import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

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
    const url = `https://umyosportscards.com/api_umyocards/public/api/userData`;
    const payload = { user_id: userId.toString() };

    
    return this.http.post(url, payload);
  }
  


  private customHeaders = new HttpHeaders()
  .set('Origin', 'https://umyosportscards.com') 
  .set('Referer', 'https://umyosportscards.com/admin/users/272'); 

updateUser(user: any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/editUser`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

 
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');

 
  return this.http.post(url, user, { headers: combinedHeaders });
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
  
  
  return this.http.post(url, {"chat_id":chat_id}, { headers: combinedHeaders });
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
  
  
  return this.http.post(url,  { headers: combinedHeaders });
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
  
 
  return this.http.post(url, {"user_id":user_id}, { headers: combinedHeaders });
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
  
 
  return this.http.post(url, {"id":id}, { headers: combinedHeaders });
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
  
 
  return this.http.post(url, {"id":agent_id}, { headers: combinedHeaders });
}



saveChat(chat_id: any,chat:any,message_type:any,responded_by_id:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/saveLiveChat`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

  
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  
  return this.http.post(url, {"chat_id":chat_id,"chat":chat,"message_type":message_type,"respond_by_id":responded_by_id}, { headers: combinedHeaders });

}
addAgent(name: any,email:any,password:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/addSupportAgent`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

  
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  
  return this.http.post(url, {"name":name,"email":email,"password":password}, { headers: combinedHeaders });

}

addPackage(id:any,description:any,expire_in:any, image:any,limit:any,logo:any,net_price:any,price:any,product_image:any,social_media_listing:any,umyoutube:any,vimeo:any,videos:any,website:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/createPackage`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

  
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  
  return this.http.post(url, {"id":id,"description":description,"expire_in":expire_in,"image":image,"limit":limit,"logo":logo,"net_price":net_price,"price":price,"product_image":product_image,"social_media_listing":social_media_listing,"umyotube":umyoutube,"vimeo":vimeo,"videos":videos,"website":website}, { headers: combinedHeaders });

}
updateAgent(name: any,email:any,id:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/updateSupportAgent`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

  
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  
  return this.http.post(url, {"name":name,"email":email,"id":id}, { headers: combinedHeaders });

}
getPackageById(id:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/getPackageSingle`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

  
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  
  return this.http.post(url, {"id":id}, { headers: combinedHeaders });

}

updatePackage(id:any,description:any,expire_in:any, image:any,limit:any,logo:any,net_price:any,price:any,product_image:any,social_media_listing:any,umyoutube:any,vimeo:any,videos:any,website:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/updatePackage`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', 
  });

  
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  
  return this.http.post(url, {"id":id,"description":description,"expire_in":expire_in,"image":image,"limit":limit,"logo":logo,"net_price":net_price,"price":price,"product_image":product_image,"social_media_listing":social_media_listing,"umyotube":umyoutube,"vimeo":vimeo,"videos":videos,"website":website}, { headers: combinedHeaders });

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
  
  
 
  

}
