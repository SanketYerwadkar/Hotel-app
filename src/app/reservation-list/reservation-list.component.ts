import { Component,OnInit } from '@angular/core';
import { Reservation } from '../moduls/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls:[ './reservation-list.component.css']
}) 
export class ReservationListComponent implements OnInit { 
  reservations : Reservation[]=[];
  reservationService: any;
reservation: any;

  constructor(private reservationservice:ReservationService){}
  ngOnInit(): void {
    this.reservations =this.reservationService.getReservation();
  }
  deleteReservation(id:string){
    this.reservation.deleteReservation(id);
  }

}
