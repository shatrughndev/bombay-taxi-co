import { Injectable } from '@angular/core';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(public restService: HttpServiceService) { }

  getAllCities(){
    return this.restService.get('common-api/allCity');
  }
}
