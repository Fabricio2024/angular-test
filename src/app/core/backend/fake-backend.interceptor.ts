import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { delay, dematerialize, materialize, Observable, of, throwError } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

let users: User[] = [{
  email: "user@demo.com",
  password: "123456"
}];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { url, method, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/login') && method === 'POST':
          return authenticate();
        default:
          return next.handle(request);
      }
    }

    function authenticate() {
      const { email, password } = body;
      const user = users.find((x) => x.email ===email && x.password === password);

      if(!user) return unauthorized();
      return ok({
        email: user.email,
        token: 'fake-jwt-token'
      })
    }

    function ok(body: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(200));
    }

    function unauthorized() {
      return throwError(() => ({
        status: 401,
        error: { message: 'Unauthorized' }
      })).pipe(materialize(), delay(500), dematerialize());
    }
  }
}

export const fakeBackendProvide = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
}
