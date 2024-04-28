import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { AppRoutingModule } from './app.routes';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';

@NgModule ({
    declarations: [
        AppComponent,
        TripListingComponent,
        TripCardComponent,
        AddTripComponent,
        EditTripComponent,
        NavbarComponent,
        LoginComponent,
        HomeComponent

    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
        
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [TripDataService],
    bootstrap: [AppComponent],
})
export class AppModule {}