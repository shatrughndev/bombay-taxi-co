import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  tripList: Array<any>;
  minPickDate: Date = new Date();
  maxPickDate: Date;
  destinationList: Array<any>;
  destinationListDeepClone: Array<any>;
  cabList : Array<any>;
  showCarList: boolean = false;
  constructor() {
    this.searchForm = new FormGroup({
      tripType: new FormControl(1, [Validators.required]),
      fromDest: new FormControl('Mumbai', [Validators.required]),
      toDest: new FormControl('Pune', [Validators.required] ),
      pickupDate: new FormControl(moment().format(), [Validators.required]),
      returnDate: new FormControl({value: moment().add(1, 'days').format(), disabled: true}),
      pickupTime: new FormControl('', [Validators.required]),
    });
    this.tripList = [
      {
        name: 'One-way Trip',
        value: 1,
      },
      {
        name: 'Round Trip',
        value: 2,
      },
      {
        name: 'Hourly Rental',
        value: 3,
      }
    ];

    this.destinationList = [
      {
        name: 'Mumbai',
        value: 'Mumbai'
      },
      {
        name: 'Navi Mumbai',
        value: 'Navi Mumbai'
      },
      {
        name: 'Pune',
        value: 'Pune',
      },
      {
        name: 'Delhi',
        value: 'Delhi'
      },
      {
        name: 'Kolkata',
        value: 'Kolkata'
      }
    ];

    this.cabList = [
      {
        name: 'Xylo, Ertiga',
        img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/xylo_new.png',
        price: '13,183'
      },
      {
        name: 'G Wagon',
        img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/xylo_new.png',
        price: '3,183'
      },
    ]
  }

  ngOnInit(): void {
    this.destinationListDeepClone = JSON.parse(JSON.stringify(this.destinationList));
  }

  selectedTripType(tripType: any){
    this.searchForm.patchValue({tripType: tripType.value});
    this.searchForm.get('returnDate')?.enable();
    if(tripType.value == 1){
      this.searchForm.get('returnDate')?.disable();
    }
    this.searchForm.get('returnDate')?.updateValueAndValidity();
  }

  searchPlace(event: any){
    console.log(event, 'event');
    if(event && event.target && event.target.value.length > 3){
      this.destinationList = [...this.destinationList.filter(item => item.name.includes(event.target.value))];
    }else {
      this.destinationList = this.destinationListDeepClone;
    }
  }

  search(){
    this.showCarList = true;
    setTimeout(() => {
      let elementVal = document.getElementsByClassName('search-detail-section')[0];
      elementVal.scrollIntoView();
    }, 100);
    }

}
