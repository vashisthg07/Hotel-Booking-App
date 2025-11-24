import { Component, OnInit } from '@angular/core';
import { RoomServices } from '../../services/room-services';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit{
  customers:any[]=[]

  constructor(private RoomServices:RoomServices){}

  ngOnInit(){
    this.getAll();
  }
  getAll(){
    this.RoomServices.getAllCustomerApi().subscribe((res:any)=>{
      this.customers=res.data;
    })
  }

  onDeleteCustomer(id:any){
    this.RoomServices.deleteCutomerApi(id).subscribe((res:any)=>{
      if(res.result){
        alert('customer is deleted sucessfully')
        this.getAll()
      }else{
        alert('failed to delete cusomer')
      }
    })
  }
}
