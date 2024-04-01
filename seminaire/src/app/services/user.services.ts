import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }
}