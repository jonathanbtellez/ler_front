import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly apiUrl = 'http://localhost:3001/api/data';
  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.apiUrl);
  }
}
