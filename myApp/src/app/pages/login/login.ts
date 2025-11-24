import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomServices } from '../../services/room-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private RoomServices : RoomServices, private router:Router){}
  loginObj={
    phone:"",
    password:""
  }

  onLogin(){
    this.RoomServices.loginApi(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem('hotelUser',JSON.stringify(this.loginObj))
        this.router.navigateByUrl('/layout')
      }else{
        alert("userName or password is incorrect")
      }
    })
  }
}
