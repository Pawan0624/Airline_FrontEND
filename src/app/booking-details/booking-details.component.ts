import { Component, OnInit } from '@angular/core';

import { FlightService } from '../flight.service';

import { observable, Observable } from 'rxjs';
import { Flight } from '../flight';
import { FlightDetails } from '../flight-details';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  flights:Observable<Flight>;

  flight = "";

  //flight1: Flight | any;

  name1 = '';
  passportNo1 = '';
  passengerNo1 = 0;

  min1='min';
  newdate1 = '';

  constructor(private flightService:FlightService,
              private router:Router,
              private route : ActivatedRoute) {this.flights= new Observable()}

  ngOnInit(): void {
    //alert("Reloading may cause Data Loss, continue ?");
    this.name1 = this.flightService.name;
    this.passportNo1 = this.flightService.passportNo;
    this.passengerNo1 = this.flightService.passengers;

    //this.flight1 = new this.flight1;

    this.flight = this.route.snapshot.params['id'];
   console.log(this.flight);
    /*this.flightService.getFlightDetails(this.flightService.flightId)
      .subscribe(data => {
        console.log(data)
        this.flight1 = data;
      }, error => console.log(error));*/

    this.reloadData();
  }

  reloadData() {

    //alert("in reload data");
    //alert(this.flight.source);

    /*this.flightService.getFlightsList()
      .subscribe(data => {
        console.log(data)
        this.flights = data;
      }, error => console.log(error));*/

    //--alert(this.flightService.source1+" "+this.flightService.destination1);
    this.newdate1 = this.flightService.date;
    this.flights = this.flightService.getFlightDetails(this.flight); 
    //alert("in reload data" + this.flights);
  }

  FlightDetails(fNumber: number){
    //alert(id);
    this.router.navigate(['selectflight', fNumber]);
  }

  editFlight(id: number) {
    this.router.navigate(['update',id])  // navigate to component from a method
  }

  deleteFlight(id: string) {
    this.flightService.deleteFlight(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
