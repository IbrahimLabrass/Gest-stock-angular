import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-personalisation-client',
  templateUrl: './personalisation-client.component.html',
  styleUrls: ['./personalisation-client.component.css']
})
export class PersonalisationClientComponent implements OnInit {
  dataSet: any;
  url = 'http://167.86.107.74:8081/farah/';
  inputs: any;
  idGlobal: any;
term : any ;
  inputss: any = [];
  constructor(private http: HttpClient , private message: NzMessageService) { }
  isVisible = false;
  display: any;
  value: any;
  panelOpenState = false;
  Listheader: any;

  data = [];


  ngOnInit(): void {

    // tslint:disable-next-line:max-line-length
    this.http.get(this.url + 'GetFormsByStructure/' + localStorage.getItem('structure')).subscribe(res => this.dataSet = res, ex => console.log(ex));
    this.display = 'none';


  }


  showInputs(id: any) {

    this.display = 'block';
    this.http.get(this.url + 'GetAllSkeletons/' + id).subscribe(res => this.inputs = res, ex => console.log(ex));

    this.idGlobal = id;

  }




  ajout() {


    this.http.get<any>(this.url + 'GetAllSkeletons/' + this.idGlobal).subscribe(res => {

      res.forEach(element => this.inputss.push(element)



        //console.log((document.getElementById(element.id) as HTMLInputElement).name)


      );

    }, ex => console.log(ex));


    for (let i = 0; i < this.inputss.length; i++) {

      this.http.get(this.url + 'AddValueInput/' + this.idGlobal + '/' + (<HTMLInputElement>document.getElementById(this.inputss[i].id)).name + '/' + (<HTMLInputElement>document.getElementById(this.inputss[i].id)).value).subscribe(res1 => console.log(res1), ex1 => console.log(ex1)) ;
    }
    setTimeout(() => {

      this.http.get<any>(this.url + 'GetNames/' + this.idGlobal).subscribe(res => this.Listheader = res, ex => console.log(ex));
      this.message.create('success', `Ajouté avec succée`);

  }, 1500);


  }

  showModal(id: any): void {



    this.http.get<any>(this.url + 'GetNames/' + id).subscribe(res => this.Listheader = res, ex => console.log(ex));
    this.idGlobal = id;
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }



viewData(name)
{
  this.http.get<any>(this.url + 'GetValues/' + this.idGlobal + '/' + name ).subscribe(res => this.data = res, ex => console.log(ex));


}


searchData(name)
{
  this.http.get<any>(this.url + 'searchValues/' + this.idGlobal + '/' + name ).subscribe(res => this.data = res, ex => console.log(ex));


}


}

