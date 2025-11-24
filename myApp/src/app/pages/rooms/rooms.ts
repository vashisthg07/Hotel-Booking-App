import { Component, OnInit } from '@angular/core';
import { RoomServices } from '../../services/room-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [FormsModule,CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms implements OnInit{
  rooms:any[]=[]
  constructor(private RoomServices:RoomServices){}
  ngOnInit(){
    this.getRooms()
  }

  getRooms(){
    this.RoomServices.getAllRoomsApi().subscribe((res:any)=>{
      this.rooms=res.data;
      console.log(this.rooms)
    })
  }

  addRooms(){
    const roomObj={
      roomId:0,
      roomName: "",
      isAcAvailable: false,
      roomCapacity: 0,
      isActive: true,
      roomTariff: 0,
      extensionNo: ""
    }
    this.rooms.unshift(roomObj)
  }

  addBulk() {
  this.RoomServices.addUpdateRoomApi(this.rooms).subscribe((res: any) => {
    if (res.result) {
      alert('Rooms updated successfully!');
      this.getRooms(); 
    } else {
      alert('Failed to update rooms.');
    }
  });
}

  onDeleteRoom(id:number){
    this.RoomServices.deleteRoom(id).subscribe((res:any)=>{
      if(res.result){
        this.rooms.splice(id,1)
        this.getRooms()
      }else{
        alert("Failed to delete rooms")
      }
    })
  }
}
