import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Magasin} from '../classe/Magasin';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Fournisseur} from '../classe/Fournisseur';

@Component({
  selector: 'app-principe-p',
  templateUrl: './principe-p.component.html',
  styleUrls: ['./principe-p.component.css']
})
export class PrincipePComponent implements OnInit {
  isVisible112 = false;
  isVisible222 = false;
  isVisible323 = false;

  isVisible = false;
  isVisible1 = false;
  isVisible12 = false;
  SearchF : any;
  isVisible2: any;
   structure: any;
  updateUniteId: any;
  toggle1= false;
  toggle2 = false;
  toggle3 = false;
  basicTable1: any;
  yourUpdateUnitAPI: any;

  constructor(private http: HttpClient , private message: NzMessageService) { }
  url  = 'http://167.86.107.74:8081/farah/' ;
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

  // fournisseur
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
catergorie : any ;
listCategorie : any ;
  NomUnite: any;
  TypeU: any;
  uniteList: any ;


  ngOnInit(): void {
    this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.Magasin = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList =  res , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherCategories').subscribe(res => this.listCategorie =  res , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherSousCategorie').subscribe(res => this.ListSousCategorie =  res , ex => console.log(ex)) ;

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
 
 
  
  // **************************************************************************************** //



  showModal122(data: any): void {
    this.NomUnite = data.nomUnite;
  this.TypeU = data.type;
    this.isVisible112 = true;
  }

  handleOk122(): void {
    console.log('Button ok clicked!222');

    this.isVisible112 = false;
  }

  handleCancel122(): void {
    console.log('Button cancel clicked!');

    this.isVisible112 = false;
  }

  // ---------
  showModal222(data: any): void {
    this.isVisible222 = true;
  }

  handleOk222(): void {
    console.log('Button ok clicked!222');

    this.isVisible222 = false;
  }

  handleCancel222(): void {
    console.log('Button cancel clicked!');

    this.isVisible222 = false;
  }
  //---------------
  showModal323(data: any): void {
    this.CategorieS = data.categorie;
    this.DesigationS = data.designation;
    this.isVisible323 = true;
  }

  handleOk323(): void {
    console.log('Button ok clicked!222');
    this.isVisible323 = false;
  }

  handleCancel323(): void {
    console.log('Button cancel clicked!');


    this.isVisible323 = false;
  }

  creerProduit(){
  //
   
    this.magasin._designation = this.designationF   ;
    this.magasin._adresse = this.adresseF ;
    this.magasin._amin = this.aminF ;
    this.magasin._fax = this.faxF ;
    this.magasin._mass2oul = this.responsableF ;
    this.magasin._codePostal = this.CodePostal ;
    this.magasin._wilaya = this.wilayaF ;
    this.magasin._numTel = this.telephoneF ;
    this.isVisible1 = false;
    this.http.post(this.url + 'AjoutMagasin', this.magasin).subscribe(res => console.log(res)  , ex => console.log(ex ) ) ;
    setTimeout(() => {  this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.Magasin = res , ex => console.log(ex));

    }, 500);


    this.createMessage('success' ,  'Magasin ajouté avec succés' ) ;
  }



  delete(id){
    this.http.delete(this.url + 'DeleteMagasin/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

    setTimeout(() => {  this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.Magasin = res , ex => console.log(ex));

    }, 500);

    this.createMessage('success' ,  'Produit supprimé avec succés' ) ;
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




  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2(): void {
    this.isVisible2 = false;
  }

  handleCancel2(): void {

    this.isVisible2 = false;
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
    this.fournisseur._typeF = this.typeFO ;
    this.fournisseur._numTel = this.telFO ;


    this.http.post(this.url + 'AjoutFournisseurs', this.fournisseur).subscribe(res => console.log(res)  , ex => console.log(ex ) ) ;



    this.createMessage('success' ,  'fournisseur ajouté avec succés' ) ;
    setTimeout(() => {  this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res , ex => console.log(ex));

    }, 1500);

  }
deleteFournisseur(id){

  this.http.delete(this.url + 'DeleteFournisseurs/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

  setTimeout(() => {  this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.Fournisseur = res , ex => console.log(ex));

  }, 1500);

  this.createMessage('success' ,  'Fournisseur supprimé avec succés' ) ;

}




ajoutStructure()
{

  this.http.get(this.url + 'AjoutStructure/' + this.DesigationS + '/' + this.typeS + '/' + this.TelephoneS + '/' + this.FaxS  ).subscribe(res => console.log(res) , ex => console.log(ex) ) ;

  setTimeout(() => {    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;


  }, 1500);



}

deleteStructure(id){
    this.http.delete(this.url + 'DeleteStructure/' + id).subscribe(res => console.log(res) , ex => console.log(ex));
    setTimeout(() => {    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;


  }, 1500);


}

ajoutUnite(){


  this.http.get(this.url + 'AjoutUnite/' + this.NomUnite + '/' + this.TypeU ).subscribe(res => console.log(res) , ex => console.log(ex));
  setTimeout(() => {    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList = res , ex => console.log(ex)) ;

  this.message.create('success', `Unité ajouté avec succées`);
  }, 1500);
}
// to change 
updateUnite(){
   
 // this.http.put(this.url + 'UpdateUnite/' +id ).subscribe(res => console.log(res) , ex => console.log(ex));
  setTimeout(() => {    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList = res , ex => console.log(ex)) ;

  this.message.create('success', `Unité updated`);
  }, 1500);
  
}

deleteU(id){
  this.http.delete(this.url + 'DeleteUnite/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

  setTimeout(() => {    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList = res , ex => console.log(ex)) ;


  }, 1500);

}
showModal12(): void {
  this.isVisible12 = true;
}

handleOk12(): void {
  this.http.get(this.url + 'AjoutUnite/' + this.NomUnite + '/' + this.TypeU ).subscribe(res => console.log(res) , ex => console.log(ex));
  setTimeout(() => {    this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList = res , ex => console.log(ex)) ;

  this.message.create('success', `Unité ajouté avec succées`);
  }, 1500);  
  console.log('Button ok clicked!');
  this.isVisible12 = false;
  this.NomUnite = '';
  this.TypeU = '';
}

handleCancel12(): void {
  console.log('Button cancel clicked!');
  this.isVisible12 = false;
}





isVisible22 : any ;

showModal22(): void {
  console.log('Button ok clicked!222');
  this.isVisible22 = true;
}

handleOk22(): void {
  let data = {'idProduit': 1 , 'designation': this.catergorie }
  this.http.post(this.url+'AjoutCategories' , data).subscribe(res => console.log(res) , ex => console.log(ex)) ;
  
  
    setTimeout(() => {   this.http.get(this.url + 'AfficherCategories').subscribe(res => this.listCategorie =  res , ex => console.log(ex)) ;
    this.message.create('success', `cat ajouté avec succées`);

  
    }, 1500);
  console.log('Button ok clicked!222');
  this.isVisible22 = false;
  this.catergorie = "" ;

}

handleCancel22(): void {
  console.log('Button cancel clicked!333');
  this.isVisible22 = false;
}

// to change 

updatecat(){
 // this.http.put(this.url + 'UpdateCategories/' + id ).subscribe(res => console.log(res) , ex => console.log(ex));
  setTimeout(() => {    this.http.get(this.url + 'AfficherCategories').subscribe(res => this.listCategorie = res , ex => console.log(ex)) ;

  this.message.create('success', `cat updated`);
  }, 1500);
  
}


deleteCat(id:any){


this.http.delete(this.url+'DeleteCategories/'+id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

setTimeout(() => {   this.http.get(this.url + 'AfficherCategories').subscribe(res => this.listCategorie =  res , ex => console.log(ex)) ;


}, 1500);
}


ajoutCat(){


  let data = {'idProduit': 1 , 'designation': this.catergorie }
this.http.post(this.url+'AjoutCategories' , data).subscribe(res => console.log(res) , ex => console.log(ex)) ;


  setTimeout(() => {   this.http.get(this.url + 'AfficherCategories').subscribe(res => this.listCategorie =  res , ex => console.log(ex)) ;

  this.catergorie = "" ;

  }, 1500);
}




SouCatergorie : any ;

isVisible23 : any ;

showModal23(): void {
  console.log('Button ok clicked!222');
  this.isVisible23 = true;
}

handleOk23(): void {
  if(this.designationSousCategorie != null && this.CategorieS != null )
{

  let data = {'designation': this.designationSousCategorie , 'categorie': this.CategorieS}
this.http.post(this.url+'AjoutSousCategorie' , data).subscribe(res => console.log(res) , ex => console.log(ex)) ;
this.success = 1 ;
this.error = 0 ;


  setTimeout(() => {   this.http.get(this.url + 'AfficherSousCategorie').subscribe(res => this.ListSousCategorie =  res , ex => console.log(ex)) ;
  this.message.create('success', `souscat ajouté avec succées`);

  }, 1500);

} else {
  this.success = 0 ;
  this.error = 1 ;
}
  console.log('Button ok clicked!222');
  this.isVisible23 = false;
  this.designationSousCategorie = "" ;
  this.CategorieS ="" ;
}

handleCancel23(): void {
  console.log('Button cancel clicked!333');
  this.isVisible23 = false;
}



designationSousCategorie : any  ;
CategorieS : any ;
ListSousCategorie : any ;
error : any ;
success : any ;
ajoutSousCat(){

if(this.designationSousCategorie != null && this.CategorieS != null )
{

  let data = {'designation': this.designationSousCategorie , 'categorie': this.CategorieS}
this.http.post(this.url+'AjoutSousCategorie' , data).subscribe(res => console.log(res) , ex => console.log(ex)) ;
this.success = 1 ;
this.error = 0 ;

this.designationSousCategorie = "" ;
this.CategorieS ="" ;
  setTimeout(() => {   this.http.get(this.url + 'AfficherSousCategorie').subscribe(res => this.ListSousCategorie =  res , ex => console.log(ex)) ;

  }, 1500);

} else {
  this.success = 0 ;
  this.error = 1 ;
}

}


// to change 

updatesouscat(){
   
 // this.http.put(this.url + 'UpdateSousCategorie/' + id ).subscribe(res => console.log(res) , ex => console.log(ex));
  setTimeout(() => {    this.http.get(this.url + 'AfficherSousCategorie').subscribe(res => this.ListSousCategorie = res , ex => console.log(ex)) ;

  this.message.create('success', `sous cat updated`);
  }, 1500);
  
}

deleteSousCat(id:any){


  this.http.delete(this.url+'DeleteSousCategorie/'+id).subscribe(res => console.log(res) , ex => console.log(ex)) ;

  setTimeout(() => {   this.http.get(this.url + 'AfficherSousCategorie').subscribe(res => this.ListSousCategorie =  res , ex => console.log(ex)) ;


  }, 1500);
  }










}
