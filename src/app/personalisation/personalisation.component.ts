import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import { Fournisseur } from '../classe/Fournisseur';


@Component({
  selector: 'app-personalisation',
  templateUrl: './personalisation.component.html',
  styleUrls: ['./personalisation.component.css']
})
export class PersonalisationComponent implements OnInit {
  onwanFO: any;
  codeFO: any;
  emailF: any;
  FaxFO: any;
  PaysFO: any;
  mou3arefjiba2iF: any;
  telFO: any;

  constructor(private http: HttpClient , private message: NzMessageService) { }
  url  = 'http://167.86.107.74:8081/farah/' ;

  fournisseur = new Fournisseur();

  FournisseurList: any;
  email: any;
  field1: any ;
  typeInput: any ;
  nameInput: any ;
  requiredInput: any ;
  structure1Input: any ;
  isVisible3= false;
  isVisible = false;
  isVisible1 = false;
  isVisible2 = false;
  isVisible4 = false;
  isVisible5 = false;

  listOfData: any ;

  listOfData1 : any ;

  nom: any;
  sujet: any;
  detail: any;
  structure: any;


  ngOnInit(): void {

    this.http.get(this.url + 'GetAllForms').subscribe(res =>  this.listOfData = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.FournisseurList =  res , ex => console.log(ex)) ;

  }



  showModal(): void {
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

  // *******************************************************************************//



  showModal1(): void {
    this.isVisible1 = true;
  }

  handleOk1(): void {
    console.log('Button ok clicked!');
    this.isVisible1 = false;
  }

  handleCancel1(): void {
    console.log('Button cancel clicked!');
    this.isVisible1 = false;
  }

  showModal4(): void {
    this.isVisible4 = true;
  }

  handleOk4(): void {
    console.log('Button ok clicked!');
    this.isVisible4 = false;
  }

  handleCancel4(): void {
    console.log('Button cancel clicked!');
    this.isVisible4 = false;
  }

  showModal5(): void {
    this.isVisible5 = true;
  }

  handleOk5(): void {
    console.log('Button ok clicked!');
    this.isVisible5 = false;
  }

  handleCancel5(): void {
    console.log('Button cancel clicked!');
    this.isVisible5 = false;
  }



  // *******************************************************************//

  showModal2( ): void {
    this.isVisible2 = true;
    //this.field1 = id ;
    //this.structure1Input = structure ;
  }

  handleOk2(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }







AjoutFormulaire()
{
  
  this.http.get(this.url + 'AjoutForm/' + this.nom + '/' + this.sujet + '/' + this.detail + '/' + this.structure).subscribe(res => console.log(res) , ex => console.log(ex)  ) ;

  setTimeout(() => {

    this.http.get(this.url + 'GetAllForms').subscribe(res =>  this.listOfData = res  , ex => console.log(ex)) ;

  }, 500);

}


AjoutFormulaireSkeleton()
{
  this.http.get(this.url + 'AjoutSkeleton/' + this.typeInput + '/' + this.nameInput + '/' + this.requiredInput + '/' + this.structure1Input + '/' + this.field1).subscribe(res=> console.log(res) , ex => console.log(ex));


  setTimeout(() => {

    this.http.get(this.url + 'GetAllSkeletons/' + this.field1).subscribe(res => this.listOfData1 = res , ex => console.log(ex)) ;

  }, 500);

}


voirInput(id: any) {

    this.http.get(this.url + 'GetAllSkeletons/' + id).subscribe(res => this.listOfData1 = res , ex => console.log(ex)) ;
  this.field1 = id ;
  this.isVisible3 = true;

  }

  handleOk3(): void {
    console.log('Button ok clicked!');
    this.isVisible3 = false;
  }

  handleCancel3(): void {
    console.log('Button cancel clicked!');
    this.isVisible3 = false;
  }

  deleteF(id: any) {
    this.http.delete<any>(this.url + 'DeleteForm/' + id).subscribe(res => {this.createMessage( res.etat , res.message  )} , ex => console.log(ex));


    setTimeout(() => {

      this.http.get(this.url + 'GetAllForms').subscribe(res =>  this.listOfData = res  , ex => console.log(ex)) ;

    }, 500);


  }

  deleteInput(id: any) {
    this.http.delete<any>(this.url + 'DeleteInput/' + id).subscribe(res => {this.createMessage( res.etat , res.message  )} , ex => console.log(ex));


    setTimeout(() => {

      this.http.get(this.url + 'GetAllSkeletons/' + this.field1).subscribe(res => this.listOfData1 = res , ex => console.log(ex)) ;

    }, 500);


  }


  createMessage(type: string , content : string): void {
    this.message.create(type, ` ${content}`);
  }
}

