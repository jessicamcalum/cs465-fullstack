import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from '../trip-listing/trip-listing.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TripListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
