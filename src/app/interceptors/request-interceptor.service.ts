import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { Transport } from '../models/transport';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService implements HttpInterceptor {
  private flight: Flight = {
    origin: '',
    destination: '',
    price: 0,
    transport: {
      flightCarrier: '',
      flightNumber: '',
    },
  };
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response: any) => {
        if (response instanceof HttpResponse) {
          response = response.clone({
            body: this.formatApiData(response.body),
          });
        }
        return response;
      })
    );
  }

  private formatApiData(data: any) {
    let finalData: Flight[] = [];
    data.forEach((element: any) => {
      this.flight = {
        origin: element.departureStation,
        destination: element.arrivalStation,
        price: element.price,
        transport: {
          flightCarrier: element.flightCarrier,
          flightNumber: element.flightNumber,
        },
      };
      finalData.push(this.flight);
    });
    return finalData;
  }
}
