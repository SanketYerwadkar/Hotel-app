import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,Validators} from '@angular/forms'
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../moduls/reservation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})
export class ReservationFromComponent  implements OnInit{

  reservationForm: FormGroup = new FormGroup({});


  constructor(private formBuilder:FormBuilder,
     private reservationService :ReservationService,
    private router : Router){ 

  }
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate:['',Validators.required] ,
      checkOutDate:['',Validators.required] , 
      guestName:['',Validators.required],  
      guestEmail:['',[Validators.required ]],  
      roomNumber:['',Validators.required ] 
    })
  }
  onSubmit(){
    if(this.reservationForm.valid){ 
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation)

      this.router.navigate(['/list'])
    } 
  }
} 