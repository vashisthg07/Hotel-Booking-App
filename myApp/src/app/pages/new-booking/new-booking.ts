import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoomServices } from '../../services/room-services';

@Component({
  selector: 'app-new-booking',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './new-booking.html',
  styleUrl: './new-booking.css',
})
export class NewBooking{
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: RoomServices) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: [''],
      aadharNo: [''],
      city: [''],
      address: [''],
      bookingId: [0],
      roomId: [0],
      customerId: [0],
      bookingFromDate: ['', Validators.required],
      bookingToDate: ['', Validators.required],
      createdDate: [new Date()],
      bookingRate: ['', Validators.required],
      naration: [''],
      createdBy: [0],
      hotelBookingDetails: this.fb.array([]),
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;

      // ✅ Call your service method
      this.bookingService.postBookingApi(formData).subscribe({
        next: (res) => {
          console.log('Booking created successfully:', res);
          alert('✅ Booking created successfully!');
          this.bookingForm.reset();
        },
        error: (err) => {
          console.error('❌ Error creating booking:', err);
          alert('❌ Something went wrong while creating booking.');
        },
      });
    } else {
      alert('⚠️ Please fill all required fields.');
    }
  }

}
