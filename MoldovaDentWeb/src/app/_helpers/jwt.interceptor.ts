import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentProfile = this.authenticationService.currentProfileValue;
        if (currentProfile && currentProfile.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentProfile.token}`
                }
            });
        }

        return next.handle(request);
    }
}