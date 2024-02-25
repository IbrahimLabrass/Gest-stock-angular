import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Fournisseur } from '../classe/Fournisseur';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  isVisible = false;
  isVisible1 = false;
  isVisible11 = false;
  isVisible2: any;
   structure: any;

  constructor(private http: HttpClient , private message: NzMessageService) { }
  url  = 'http://167.86.107.74:8081/farah/' ;
  SearchF : any ;
  fournisseur = new Fournisseur();
  emailF: any;
  Fournisseur : any ;
  mou3arefjiba2iF: any;
  typeFO: any;
  codeFO: any;
  telFO: any;
  FaxFO: any;
  PaysFO: any;
  onwanFO: any;
 

  ngOnInit(): void {
    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res  , ex => console.log(ex)) ;

  }
  isFormValid(): boolean {
    return (
      this.emailF &&
      this.mou3arefjiba2iF &&
      this.PaysFO &&
      this.typeFO &&
      this.codeFO &&
      this.telFO &&
      this.FaxFO &&
      this.onwanFO
    );
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


  
  createMessage(type: string , message: string): void {
    this.message.create(type, message);
  }
  creerFournisseur(){

    this.fournisseur._adresse = this.onwanFO ;
    this.fournisseur._codeF = this.codeFO ;
    this.fournisseur._email = this.emailF ;
    this.fournisseur._fax = this.FaxFO ;

    this.fournisseur._pays = this.PaysFO ;
    this.fournisseur._mou3aref = this.mou3arefjiba2iF ;
    this.fournisseur._typeF = (<HTMLInputElement> document.getElementById('typeFO')).value;
    this.fournisseur._numTel = this.telFO ;


    this.http.post(this.url + 'AjoutFournisseurs', this.fournisseur).subscribe(res => console.log(res)  , ex => console.log(ex ) ) ;



    this.createMessage('success' ,  'fournisseur ajouté avec succés' ) ;
    setTimeout(() => {  this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res , ex => console.log(ex));

    }, 1000);

  }
deleteFournisseur(id){

  this.http.delete(this.url + 'DeleteFournisseurs/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

  setTimeout(() => {  this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res , ex => console.log(ex));

  }, 500);

  this.createMessage('success' ,  'Fournisseur supprimé avec succés' ) ;

}

showModal1(): void {
  this.isVisible1 = true;
}

handleOk1(): void {
  this.isVisible1 = false;
}

handleCancel1(): void {

  this.isVisible1 = false;
}

// update

updateFournisseur(){
 // this.http.put(this.url + 'UpdateFournisseurs/' +id ).subscribe(res => console.log(res) , ex => console.log(ex));
  setTimeout(() => {    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res , ex => console.log(ex)) ;

  this.message.create('success', `fournisseur updated`);
  }, 1500);

}
showModal11(data : any): void {
  this.FaxFO = data.fax;
  this.telFO = data.numTel;
  this.emailF = data.email;
  this.typeFO = data.typeF;
  this.Fournisseur = data.Fournisseur;

  this.isVisible11 = true;
}

handleOk11(): void {
  this.isVisible11 = false;
}

handleCancel11(): void {

  this.isVisible11 = false;
}
}
