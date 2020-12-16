import { environment } from './../../../../environments/environment.prod';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl: string;

  constructor(private http: HttpClient) {
    this.usersApiUrl = environment.usersApiUrl;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.usersApiUrl).pipe(
      map((data: User[]) => {
        return data;
      }),
      catchError((err) => {
        return throwError('error');
      })
    );
  }
}
