import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private route: string;
  constructor(private http: HttpClient) {
    this.route = 'flights';
  }

  public getFlights() {
    return this.http.get(`${environment.apiURL}${this.route}/2`);
  }
}
