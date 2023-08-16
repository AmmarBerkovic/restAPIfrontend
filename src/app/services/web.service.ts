import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL: any;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }
  get(uri: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.ROOT_URL}/${uri}`, person);
  }
  delete(uri: string, surname: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}/${surname}`);
  }
  patch(uri: string, surname: string, name: string) {
    return this.http.patch(`${this.ROOT_URL}/${uri}/${surname}`, new Person(name, ""));
  }


}
