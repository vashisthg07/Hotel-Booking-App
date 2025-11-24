import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServices {
  private staticUrl='https://freeapi.miniprojectideas.com/api/HotelBooking/';
  constructor(private http:HttpClient){}

  loginApi(loginData:any):Observable<any>{
    return this.http.post(this.staticUrl+'Login',loginData)
  }

  getAllRoomsApi():Observable<any>{
    return this.http.get(this.staticUrl+'GetAllRooms')
  }

  addUpdateRoomApi(data:any):Observable<any>{
    return this.http.post(this.staticUrl+'AddUpdateBulkRooms',data)
  }

  deleteRoom(id:number):Observable<any>{
    return this.http.delete(this.staticUrl+`/DeleteRoomByRoomId?roomId=${id}`)
  }

  getAllCustomerApi():Observable<any>{
    return this.http.get(this.staticUrl+'GetAllCustomers')
  }

  deleteCutomerApi(id:any):Observable<any>{
    return this.http.delete(this.staticUrl+`DeleteUserByUserId?userId=${id}`)
  }

  getAllUserApi():Observable<any>{
    return this.http.get(this.staticUrl+'GetAllUsers')
  }

  postUserApi(data:any):Observable<any>{
    return this.http.post(this.staticUrl+'AddUpdateUser',data)
  }

  deleteUserApi(id:any):Observable<any>{
    return this.http.delete(this.staticUrl+`DeleteUserByUserId?userId=${id}`)
  }

  getAllBookingApi():Observable<any>{
    return this.http.get(this.staticUrl+'GetAllBookings')
  }

  postBookingApi(data:any):Observable<any>{
    return this.http.post(this.staticUrl+"BookRoom",data)
  }

}
