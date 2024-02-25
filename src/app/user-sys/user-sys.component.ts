import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-sys',
  templateUrl: './user-sys.component.html',
  styleUrls: ['./user-sys.component.css']
})
export class UserSysComponent implements OnInit {
  isVisible = false;
  isVisible1 = false;
  NomUnite: any;
  TypeU: any;
  EtatSearch : any ;

  uniteList: any ;
  url  = 'http://167.86.107.74:8081/farah/' ;
  //users
  codeU: any;
  NomU: any;
  PrenomU: any;
  CinU: any;
  EmailU: any;
  TelU: any;
  StructureU: any;
  PasswordU: any;
  MagasinU: any;
  Users : any ;
  Structures : any ;
  PasswordConfirmU: any;
  constructor(private http: HttpClient , private message: NzMessageService) { }

  ngOnInit(): void {

  this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList =  res , ex => console.log(ex)) ;
  this.http.get(this.url + 'AfficherUsers' ).subscribe(res => {this.Users = res , console.log(this.Users) ; }  ,  ex => console.log(ex)) ;
  this.http.get(this.url+'AfficherStructure').subscribe(res => this.Structures = res , ex => console.log(ex)) ;

  }
  validatePasswords(): boolean {
    return this.PasswordU === this.PasswordConfirmU;
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


  // ******************************************************************************************************************* //


  // ************************************************************************************************************************* //

  ajoutUnite(){


    this.http.get(this.url + 'AjoutUnite/' + this.NomUnite + '/' + this.TypeU ).subscribe(res => console.log(res) , ex => console.log(ex));
    setTimeout(() => {    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList = res , ex => console.log(ex)) ;

    this.message.create('success', `Unité ajouté avec succées`);
    }, 500);
  }

  delete(id){
    this.http.delete(this.url + 'DeleteUnite/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

    setTimeout(() => {    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList = res , ex => console.log(ex)) ;


    }, 500);

  }

// user
  AjoutUser()
  {


    this.MagasinU =  "MG" ;

    const structure = (<HTMLInputElement> document.getElementById('structure')).value;

    this.http.get(this.url + 'AjoutUsers/' + this.NomU + '/' + this.PrenomU + '/' + this.CinU + '/' + this.EmailU + '/' + this.TelU + '/' + structure + '/'
      + this.PasswordU + '/' + this.MagasinU + '/' + this.codeU).subscribe(res => console.log(res) , ex => console.log(ex)) ;


    setTimeout(() => {    this.http.get(this.url + 'AfficherUsers' ).subscribe(res => {this.Users = res , console.log(this.Users) ; }  ,  ex => console.log(ex)) ;

    this.message.create('success', `User ajouté avec succées`);

    }, 500);
  }



  deleteUser(id){
    this.http.delete(this.url + 'DeleteUsers/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

    setTimeout(() => {    this.http.get(this.url + 'AfficherUsers').subscribe(res => this.Users = res , ex => console.log(ex)) ;


    }, 500);

  }
  updateUser(){
    //this.http.put(this.url + 'UpdateUsers/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

    setTimeout(() => {    this.http.get(this.url + 'AfficherUsers').subscribe(res => this.Users = res , ex => console.log(ex)) ;


    }, 500);
  }
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


}
