import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profileUrl = 'api/profile';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Profile[]>(`${this.profileUrl}`);
  }

  register(email: string, password: string) {
    return this.http.post(
      `${this.profileUrl}/register`,
      { email, password });
  }
}
