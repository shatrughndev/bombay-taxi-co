import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: any[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(private cityService: CitiesService) { }

  ngOnInit(): void {
    this.getCityList();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    let isValuePresent = this.cities.find(list => list.value.toLowerCase() == value.toLowerCase());
    if(!isValuePresent && value){
      this.cities.push({value: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  
  remove(city: any) {
    const index = this.cities.indexOf(city);

    if (index >= 0) {
      this.cities.splice(index, 1);

      // this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(city: any, event: any) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(city);
      return;
    }

    // Edit existing fruit
    const index = this.cities.indexOf(city);
    if (index >= 0) {
      this.cities[index].value = value;
    }
  }


  getCityList() {
    this.cityService.getAllCities().subscribe(res => {
      console.log(res, 'response');
      if(res && res.length){
        this.cities = res;
      }
    })
  }
}

