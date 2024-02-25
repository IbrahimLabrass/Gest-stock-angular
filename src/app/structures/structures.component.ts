import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Fournisseur} from '../classe/Fournisseur';
@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

  isVisible = false;
  isVisible1 = false;
  isVisible22 = false;
  isVisible2: any;
   structure: any;
  Fournisseur: any;
  wilaya: any;
  Users: any;
  Magasin: any;
  Users1: any;
  listOfData: Object;
  ListSousCategorie: Object;
  users: Object;
  constructor(private http: HttpClient , private message: NzMessageService) { }
  url  = 'http://167.86.107.74:8081/farah/' ;
  fournisseur = new Fournisseur();
  FournisseurList : any;
  magasinList : any ;
  userList : any;
  emailF: any;
  SearchF : any;
  DesigationS: any;
  typeS: any;
  TelephoneS: any;
  FaxS: any;
catergorie : any ;
listCategorie : any ;
  NomUnite: any;
  TypeU: any;
  uniteList: any ;
  NomU: any;
  designation : any ;
  email : any ;
  // user 
  codeU: any;
  PrenomU: any;
  CinU: any;
  EmailU: any;
  TelU: any;
  StructureU: any;
  PasswordU: any;
  MagasinU: any;


  ngOnInit(): void {   
    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;

    this.http.get(this.url+"AfficherUsers").subscribe(res => {this.users = res , console.log(res) , ex => console.log(ex)} ) ;



    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.FournisseurList =  res , ex => console.log(ex)) ;

    this.http.get(this.url + 'AfficherMagasin').subscribe(res => this.magasinList =  res , ex => console.log(ex)) ;


   this.http.get(this.url + 'AfficherUnite').subscribe(res => this.uniteList =  res , ex => console.log(ex)) ;

    this.http.get(this.url + 'AfficherProduits').subscribe(res => this.listOfData = res , ex => console.log(ex));

    setInterval(() => {      this.http.get(this.url + 'AfficherProduits').subscribe(res => this.listOfData = res , ex => console.log(ex));
  }, 3000);

  this.http.get(this.url + 'AfficherCategories').subscribe(res => this.listCategorie =  res , ex => console.log(ex)) ;
    this.http.get(this.url + 'AfficherSousCategorie').subscribe(res => this.ListSousCategorie =  res , ex => console.log(ex)) ;
  }

  isFormValid(): boolean {
    return (
      this.DesigationS &&
      this.emailF &&
      this.typeS &&
      this.TelephoneS &&
      this.FaxS
    );
  }
  isFieldInvalid(fieldName: string): boolean {
    const field = this[fieldName];
    return field === '' || (field && field.invalid && field.touched);
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


  


  ajoutStructure()
  {
  
    this.http.get(this.url + 'AjoutStructure/' + this.DesigationS + '/' + this.typeS + '/' + this.TelephoneS + '/' + this.FaxS  ).subscribe(res => console.log(res) , ex => console.log(ex) ) ;
  
    setTimeout(() => {    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;
  
  
    }, 500);
  
    this.createMessage('success' ,  'Structure ajouté avec succés' ) ;
  
  }
  
  deleteStructure(id){
      this.http.delete(this.url + 'DeleteStructure/' + id).subscribe(res => console.log(res) , ex => console.log(ex));
      setTimeout(() => {    this.http.get(this.url + 'AfficherStructure' ).subscribe(res => this.structure  = res  , ex => console.log(ex)) ;
  
  
    }, 500);
  
  
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


// to change 

  updateStructure(){
  
   
     this.http.put(this.url + 'UpdateStructure' , id ).subscribe(res => console.log(res) , ex => console.log(ex));
      setTimeout(() => {    this.http.get(this.url + 'AfficherStructure').subscribe(res => this.StructureU = res , ex => console.log(ex)) ;
    
      this.message.create('success', `structure updated`);
      }, 1500);
      
    
  }
  
  showModal22(data : any): void {
    this.FaxS = data.fax;
    this.TelephoneS = data.numTel;
    this.typeS = data.type;
    this.emailF = data.emailF	;
    this.DesigationS = data.desingation	;

    this.isVisible22 = true;
  }

  handleOk22(): void {
    this.isVisible22 = false;
  }

  handleCancel22(): void {

    this.isVisible22 = false;
  }
}
