import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getDropdownOptions(): Observable<any> {
    return this.http.get<any>('assets/dropdown-options.json');
  }
}
