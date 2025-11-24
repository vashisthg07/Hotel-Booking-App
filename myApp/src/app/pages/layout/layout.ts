import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit{
  user:any;
  constructor(private router:Router){}
  ngOnInit(){
    this.getUser()
  }

  getUser() {
  const userData = localStorage.getItem('hotelUser');
  if (userData) {
    this.user = JSON.parse(userData);
    console.log(this.user);
  }
}

  onLogOff(){
    localStorage.removeItem('hotelUser')
    this.router.navigateByUrl('login')
  }
}
