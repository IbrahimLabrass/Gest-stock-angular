import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Magasin } from '../classe/Magasin';
import { Fournisseur } from '../classe/Fournisseur';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {
  isVisible = false;
  isVisible2 = false;
  editedMagasin: any;

  constructor(private http: HttpClient , private message: NzMessageService) { }
  url  = 'http://167.86.107.74:8081/farah/' ;

  structure: any;

// magasin
  magasin = new Magasin() ;
  Magasin: any ;
  designationF: any;
  wilayaF: any;
  CodePostal: any;
  adresseF: any;
  responsableF: any;
  telephoneF: any;
  faxF: any;
  aminF: any;
  mg : any ;

   // fournisseur

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
   DesigationS: any;
   typeS: any;
   TelephoneS: any;
   FaxS: any;
   Users : any ;
   Users1 : any ;
   visible33 = false;
   wilaya : any  ;
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
  Structures : any ;
  PasswordConfirmU: any;
  Prenom  : any;
  Nom  : any;
  Cin  : any;
  Email  : any;
  Tel  : any;
  Password  : any;

  
  open(): void {
    this.visible33 = true;
  }

  close(): void {
    this.visible33 = false;
  }
  optionList : any ;


  ngOnInit(): void {
    this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.Magasin = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherUsers').subscribe(res => this.Users = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherUsers').subscribe(res => this.Users1 = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'GetWilaya').subscribe(res => this.wilaya = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;
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
  // ------------

  showModal2(magasin : any): void {
  
    this.designationF = magasin.designation;
    this.wilayaF = magasin.wilaya;
    this.telephoneF = magasin.numTel;
    this.faxF = magasin.fax;
    this.responsableF = magasin.mass2oul;
    this.aminF = magasin.amin;
    
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

  //------------------

  creerMg(){

    this.magasin._designation = this.designationF   ;
    this.magasin._adresse = this.adresseF ;
    this.magasin._amin = this.aminF ;
    this.magasin._fax = this.faxF ;
    this.magasin._mass2oul = this.responsableF ;
    this.magasin._codePostal = this.CodePostal ;
    this.magasin._wilaya = this.wilayaF ;
    this.magasin._numTel = this.telephoneF ;
    this.isVisible = false;
    this.http.post(this.url + 'AjoutMagasin', this.magasin).subscribe(res => console.log(res)  , ex => console.log(ex ) ) ;
    setTimeout(() => {  this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.Magasin = res , ex => console.log(ex));

    }, 500);


    this.createMessage('success' ,  'Magasin ajouté avec succés' ) ;
  }

  updateMg(): void {
       let data = {'designation': this.designationF, 'wilaya': this.wilayaF, 'adresse': this.adresseF, 'codePostal':this.CodePostal, 'telephone': this.telephoneF, 'fax': this.faxF, 'amin': this.aminF, 
        'mass2oul': this.responsableF, };
      this.http.put(this.url + 'UpdateMagasin/' , data).subscribe(() => {
        console.log('Item updated successfully.');
       });
  
      // Display a success message
      this.message.success('تم تحديث المغازة بنجاح.');
  
     
  }
  

  delete(id){
    this.http.delete(this.url + 'DeleteMagasin/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

    setTimeout(() => {  this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.Magasin = res , ex => console.log(ex));

    }, 500);

    this.createMessage('success' ,  'Produit supprimé avec succés' ) ;
  }


  
  createMessage(type: string , message: string): void {
    this.message.create(type, message);
  }

  RemoveElementFromObjectArray(key: string , Object:any) {
    Object.forEach((value,index)=>{
        if(value.email==key) Object.splice(index,1);
    });
  }

  log1(value: any): void {


    this.RemoveElementFromObjectArray(this.responsableF , this.Users) ;
    console.log(this.responsableF);
  }
  log2(value: any): void {
  
  
    this.RemoveElementFromObjectArray(this.aminF, this.Users) ;
    console.log(this.aminF);
  }
}
