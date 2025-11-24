import { Component, OnInit } from '@angular/core';
import { RoomServices } from '../../services/room-services';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit{
  users:any[]=[]
  editIndex=null;

  userObj={
  userId: "",
  userName: "",
  password: "",
  role: ""
}
  constructor(private RoomServices:RoomServices){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.RoomServices.getAllUserApi().subscribe((res:any)=>{
      this.users=res.data;
      console.log(this.users)
    })
  }

  onDelete(id:any){
    this.RoomServices.deleteUserApi(id).subscribe((res:any)=>{
      if(res.result){
        alert('user is deleted')
      }else{
        alert("Failed to delete User")
      }
    })
  }

  onUpdate(user:any){
    console.log(user)
    this.userObj=user;
    this.editIndex=user.userId
  }

  onSaveUser(userObj:any){
    if(userObj){
      alert("User is added")
    }else{
      alert("Failed to add User")
    }
  }

  onReset(form:NgForm){
    form.resetForm()
  }
}
