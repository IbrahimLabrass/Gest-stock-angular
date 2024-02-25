import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  url  = 'http://167.86.107.74:8081/farah/' ;
  constructor(private http : HttpClient ,   private message: NzMessageService) { }
  isVisible = false;
  isVisible1 = false;
  isVisible2 = false;
  code : any ;
  designation : any ;
  map : any ;
  term : any;
  mo3tamdeya : any ;

  ngOnInit(): void {

    setInterval(() => {  this.http.get<any>(this.url+'GetWilaya').subscribe(res => this.map = res , ex => console.log(ex)) ;  }, 2000);


  }





  // ************************************************************************************************************** //

  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }
  // ************************************************************************************************************** //


AjouterWilaya()
{



  const Localisation = (<HTMLInputElement> document.getElementById('localisation')).value;
  this.http.get(this.url+'AjouterWilaya/'+this.designation+'/'+this.code+'/'+Localisation+'/'+this.mo3tamdeya ).subscribe(res => console.log(res) , ex => console.log(ex))


  this.message.create('success', `Unité ajouté avec succées`);

}



Lieux: Lieu[] = [{Latitude: '36.86250', Longitude: '10.19556', gouvernorat: 'Ariana'}, {
  Latitude: '36.73333',
  Longitude: '9.18333',
  gouvernorat: 'Beja'
}, {Latitude: '36.75333', Longitude: '10.2222', gouvernorat: 'Ben Arous'}, {
  Latitude: '37.29',
  Longitude: '9.87',
  gouvernorat: 'Bizerte'
}, {Latitude: '33.88333', Longitude: '10.11667', gouvernorat: 'Gabes'}, {
  Latitude: '34.42500',
  Longitude: '8.78417',
  gouvernorat: 'Gafsa'
}, {Latitude: '36.50111', Longitude: '8.77944', gouvernorat: 'Jendouba'}, {
  Latitude: '35.68',
  Longitude: '10.10',
  gouvernorat: 'Kairouan'
}, {Latitude: '35.18', Longitude: '8.83', gouvernorat: 'Kasserine'}, {
  Latitude: '33.70194',
  Longitude: '8.97361',
  gouvernorat: 'Kebili'
}, {Latitude: '36.19', Longitude: '8.71', gouvernorat: 'Le kef'}, {
  Latitude: '35.52',
  Longitude: '11.07',
  gouvernorat: 'Mahdia'
}, {Latitude: '36.80778', Longitude: '10.10111', gouvernorat: 'Manouba'}, {
  Latitude: '33.35',
  Longitude: '10.49',
  gouvernorat: 'Medenine'
}, {Latitude: '35.79', Longitude: '10.82', gouvernorat: 'Monastir'}, {
  Latitude: '36.45000',
  Longitude: '10.73333',
  gouvernorat: 'Nabeul'
}, {Latitude: '34.74056', Longitude: '10.76028', gouvernorat: 'Sfax'}, {
  Latitude: '35.04028',
  Longitude: '9.49361',
  gouvernorat: 'Sidi Bouzid'
}, {Latitude: '36.08333', Longitude: '9.36667', gouvernorat: 'Siliana'}, {
  Latitude: '35.82556',
  Longitude: '10.64111',
  gouvernorat: 'Sousse'
}, {Latitude: '32.93333', Longitude: '10.45000', gouvernorat: 'Tatouine'}, {
  Latitude: '33.93',
  Longitude: '8.13',
  gouvernorat: 'Tozeur'
}, {Latitude: '36.80278', Longitude: '10.17972', gouvernorat: 'Tunis'}, {
  Latitude: '36.40',
  Longitude: '10.14',
  gouvernorat: 'Zaghouan'
}];


delete(id : any){ this.http.delete(this.url+'DeleteWilaya/'+id).subscribe(res => console.log(res) , ex => console.log(ex))}

}

export interface Lieu {
  Latitude: string;
  Longitude: string;
  gouvernorat: string;
}
