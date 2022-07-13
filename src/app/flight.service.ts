import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightId = "0";
  source = '';
  destination = '';
  source1 = '';
  destination1 = '';
  date = '';
  passengers = 0;
  name = '';
  passportNo = '';

  baseUrl = 'http://localhost:8080/Airline/flight';
 

  constructor(private http:HttpClient) {

   }

  newFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, flight);
  }

  getFlightsList(): Observable<any> {
    //alert(source +" "+destination)
    //alert(`${this.baseUrl}/${source}/${destination}`);
    //alert("getflightlist");
    return this.http.get(`${this.baseUrl}`);
  }

  deleteFlight(id: string): Observable<any> {
     
    alert("Deleted")
    
    let response = this.http.delete(`${this.baseUrl}/${id}`);
    response.subscribe((data) => {
      console.log(data);
    })

    return response;
  }

  getProductsList1(): Observable<any> {
    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }


  getFlight(source: string, destination: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${source}/${destination}`);
  }

  getFlightDetails(id: string): Observable<any> {
    this.flightId = id;
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateFlight(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getFlightById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}



 /*getProductsList(): Observable<any> {
    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/