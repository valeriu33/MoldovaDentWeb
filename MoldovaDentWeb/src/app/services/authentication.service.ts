import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Login, Logout } from '../actions/authentication.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentProfileSubject: BehaviorSubject<Profile>;
  public currentProfile: Observable<Profile>;
  public profileUrl = 'api/profile/';

  constructor(
    private http: HttpClient,
    private store: Store
    ) {
    this.currentProfileSubject = new BehaviorSubject<Profile>(JSON.parse(localStorage.getItem('currentProfile')));
    this.currentProfile = this.currentProfileSubject.asObservable();
  }

  public get currentProfileValue(): Profile {
    return this.currentProfileSubject.value;
  }

  login(email: string, password: string): Observable<Profile> {
    return this.http.post<any>(this.profileUrl + 'login', {email, password})
      .pipe(map(profile => {
        localStorage.setItem('currentProfile', JSON.stringify(profile));
        this.currentProfileSubject.next(profile);
        this.store.dispatch(new Login(email));
        return profile;
      }));
  }

  logout() {
    localStorage.removeItem('currentProfile');
    this.currentProfileSubject.next(null);
    this.store.dispatch(new Logout());
  }
}
