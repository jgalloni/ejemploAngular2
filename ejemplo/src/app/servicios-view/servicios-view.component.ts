import { Component, OnInit,OnDestroy } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-servicios-view',
  templateUrl: './servicios-view.component.html',
  styleUrls: ['./servicios-view.component.css']
})
export class ServiciosViewComponent implements OnInit,OnDestroy {

  private countries;
  private subcription;
  constructor(private service:DummyService) { }

  ngOnInit() {
    this.subcription=this.service.getCountries()
    .map(
      r=>r.map(a=>a.name+'-'+a.alpha3_code)
      )
    .subscribe(r=>this.countries=r);

    this.service.getCountriesPromise().then(r=>console.log(r));
  }

  ngOnDestroy(){
    this.subcription.unsubscribe()
  }

}
