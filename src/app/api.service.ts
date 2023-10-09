import { Injectable } from '@angular/core';
import { User } from './model.model';
import { Pkg } from './model.model';
import { Agent } from './model.model';
import { Amount } from './model.model';
import { ChatRecord } from './model.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
  .set('Origin', 'https://umyosportscards.com') // Change to your desired Origin
  .set('Referer', 'https://umyosportscards.com/admin/users/272'); // Change to your desired Referer

updateUser(user: any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/editUser`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', // Add your authentication token if needed
  });

  // Combine custom headers with the default headers
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');

  // Make a POST request with the user object as payload and custom headers
  return this.http.post(url, user, { headers: combinedHeaders });
}


openChat(chat_id: any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/getLiveChat`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', // Add your authentication token if needed
  });

  // Combine custom headers with the default headers
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  // Make a POST request with the user object as payload and custom headers
  return this.http.post(url, {"chat_id":chat_id}, { headers: combinedHeaders });
}
saveChat(chat_id: any,chat:any,message_type:any,responded_by_id:any): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/saveLiveChat`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', // Add your authentication token if needed
  });

  // Combine custom headers with the default headers
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');
  
  // Make a POST request with the user object as payload and custom headers
  return this.http.post(url, {"chat_id":chat_id,"chat":chat,"message_type":message_type,"respond_by_id":responded_by_id}, { headers: combinedHeaders });

}




getChatUsers(): Observable<any> {
  const url = `https://umyosportscards.com/api_umyocards/public/api/getOpenChatAdmin`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token', // Add your authentication token if needed
  });

  // Combine custom headers with the default headers
  const combinedHeaders = headers
    .append('Origin', this.customHeaders.get('Origin') || '')
    .append('Referer', this.customHeaders.get('Referer') || '');

  // Make a POST request with the user object as payload and custom headers
  return this.http.post(url, { headers: combinedHeaders });
}







  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');
  }

  getFullCountryName(shortName: string, countries: any[]): string {
    const country = countries.find((c) => c.alpha2Code === shortName);
    return country ? country.name : shortName;
  }
  
  
 
  
  private agents: Agent[] = [
    {
      id: 1,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 2,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 3,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 4,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 5,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 6,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 7,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
   
    
  ];
  private chatRecord: Agent[] = [
    {
      id: 1,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 2,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 3,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 4,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 5,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 6,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
    {
      id: 7,
        name:'David',
        email:'davidtest@gmail.com',
       
    },
   
    
  ];

  
  getAgents(): Agent[] {
    return this.agents;
  }
 
  
}
