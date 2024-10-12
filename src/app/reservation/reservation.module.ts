import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFromComponent } from '../reservation-from/reservation-from.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ReservationFromComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ReservationModule { }
