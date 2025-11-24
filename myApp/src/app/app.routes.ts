import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Booking } from './pages/booking/booking';
import { BookingCalender } from './pages/booking-calender/booking-calender';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewBooking } from './pages/new-booking/new-booking';
import { Rooms } from './pages/rooms/rooms';
import { User } from './pages/user/user';
import { Customer } from './pages/customer/customer';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'layout',
    component: Layout,
    canActivate:[authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'booking', component: Booking },
      { path: 'booking-calender', component: BookingCalender },
      { path: 'new-booking', component: NewBooking },
      { path: 'rooms', component: Rooms },
      { path: 'user', component: User },
      { path: 'customer', component: Customer}
    ]
  }
];
