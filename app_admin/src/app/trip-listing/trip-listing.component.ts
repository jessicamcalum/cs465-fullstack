import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';

import { TripDataService} from '../services/trip-data.service'; // Imports the TripDataService
import { Trip } from '../models/trip'; // Imports the Trip model

import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]  // Registers TripDataService as a provider
})

export class TripListingComponent implements OnInit {
  
  trips!: Trip[];
  message: string = '';

  // Constructor to initialize the TripDataService

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    console.log('trip-listing constructor');
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  // addTrip() method that will support the new button

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  // Method that will call the getTrips() method in TripDataService
  /*
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' trips available.';
          }
          else{
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error:any) => {
          console.log('Error: ' + error);
        }
      })
  }
*/

private getStuff(): void {
  this.tripDataService.getTrips()
    
      .then((value: any) => {
        this.trips = value;
        if(value.length > 0)
        {
          this.message = 'There are ' + value.length + ' trips available.';
        }
        else{
          this.message = 'There were no trips retrieved from the database';
        }
        console.log(this.message);
      })
      .catch((error:any) => {
        console.error('Error: ', error);
      
    })
}
  // ngOnInit method that will call the private method when the component is initialized
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

}
