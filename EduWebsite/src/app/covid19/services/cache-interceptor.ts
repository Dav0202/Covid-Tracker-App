import { Injectable } from "@angular/core";
import { HttpEvent,HttpInterceptor,HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs";
import { HttpCacheService } from "./http-cache.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cacheservice: HttpCacheService
    ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method !== 'GET') {
      this.cacheservice.invalidateCache();
      return next.handle(req);
    }

    const cachedResponse: HttpResponse<any> = this.cacheservice.get(req.url);

    if (cachedResponse) {

      return of(cachedResponse)
    }

    return next.handle(req)
      .pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              this.cacheservice.put(req.url, event);
            }
          }
        )
      )

  }



}
