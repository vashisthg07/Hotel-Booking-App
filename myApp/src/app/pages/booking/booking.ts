import { Component } from '@angular/core';
import { RoomServices } from '../../services/room-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [FormsModule,CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {
  allBookings:any[]=[]
  constructor(private roomService:RoomServices){}
  ngOnInit(){
    this.getAllBookings()
  }
  getAllBookings(){
    this.roomService.getAllBookingApi().subscribe((res:any)=>{
      this.allBookings=res.data;
      console.log('hi')
      console.log(this.allBookings)
    })
  }
}
