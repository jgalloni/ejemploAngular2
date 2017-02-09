import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Http } from '@angular/http';

@Injectable()
export class DummyService {

  constructor(private http:Http) { }
  private url:string = 'http://services.groupkt.com/country/get/'
  getCountries(){
    return this.http.get(this.url+'all').map(r=>r.json().RestResponse.result);
  }
  getCountriesPromise(){
    return this.http.get(this.url+'all').map(r=>r.json().RestResponse.result).toPromise();
  }
}
