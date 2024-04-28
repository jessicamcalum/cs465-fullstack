import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'login', component: LoginComponent} ,
    { path: 'list-trips', component: TripListingComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        EditTripComponent,
  
    ],
    
    exports: [RouterModule]
})
export class AppRoutingModule{}