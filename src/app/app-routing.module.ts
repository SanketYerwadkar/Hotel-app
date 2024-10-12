import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import {ReservationFromComponent} from './reservation-from/reservation-from.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"list",component:ReservationListComponent},
  {path:"new",component:ReservationFromComponent},
  {path:"edit/:id",component:ReservationFromComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  