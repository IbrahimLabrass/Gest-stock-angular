import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../classe/Produit';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-etat-matiere',
  templateUrl: './etat-matiere.component.html',
  styleUrls: ['./etat-matiere.component.css']
})
export class EtatMatiereComponent implements OnInit {

  constructor( private http: HttpClient  , private message: NzMessageService) { }
  url  = 'http://167.86.107.74:8081/farah/' ;
  produit = new Produit() ;
  isVisible = false;

  term : any;
ListUnite: any ;

ListUnite1: any ;
SearchF: any;
  // variable d'ajout

  couleur: any;
  marque: any;
  typeP: any;
  codeP: any;
  taille: any;

  categorie: any;
  sousCat: any;
  unite: any;
  magasin: any;
  fournisseur: any;
  prixU: any;
  minQuantite: any;
  Quantite: any;
  tva: any;

  // variable d'affichage

  marqueA: any;
  categorieA: any;
  sousCatA: any;
  typePA: any;
  tvaA: any;
  etatA: any;
  uniteA: any;
  couleurA: any ;
  tailleA: any ;

  /////////

  prod: any ;
  isVisible1: any ;

  listOfData: any ;
  listOfData1: any ;

  inputValue?: string;
  options: string[] = [];
  FournisseurList : any ;
  searchTerm: any;
  selectedFournisseur: any;
  uniteList :  any ;
  magasinList : any ;
  users : any ;
  idEtat : any ;
  listCategorie : any ;
  ListSousCategorie : any ;
  ngOnInit(): void {


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

  
  showModal(): void {
    this.isVisible = true;
  }


  showModal11(id:any): void {
    this.idEtat = id;
    
    console.log(this.idEtat)
    this.isVisible1 = true;
  }


  handleOk11(): void {
    console.log('Button ok clicked!');
    this.isVisible1 = false;
  }

  handleCancel11(): void {
    console.log('Button cancel clicked!');
    this.isVisible1 = false;
  }


  creerProduit()

  {
    if (this.produit._id !== null){ this.produit._id = this.idEtat }
    else {this.produit._id = 0;}
    this.produit._codeAbar = this.codeP ;
    this.produit._couleur  = this.couleur  ;
    this.produit._marque  = this.marque  ;
    this.produit._taille  = this.taille  ;
    this.produit._etat  = (document.getElementById('etat') as HTMLInputElement).value;
    this.produit._idCategorie  = this.categorie  ;
    this.produit._idSousCategorie  = this.sousCat  ;
    this.produit._idUnite  =(document.getElementById('unite') as HTMLInputElement).value;
    this.produit._type  = this.typeP  ;
    this.produit._idMagasin  = (document.getElementById('magasin') as HTMLInputElement).value ;
    this.produit._idFournisseur  = (document.getElementById('fournisseur') as HTMLInputElement).value;
    this.produit._prixUnitaire  = this.prixU  ;
    this.produit._minQuant  = this.minQuantite  ;
    this.produit._currentQuant  = this.Quantite  ;
    this.produit._tva  = this.tva  ;

    console.log(this.produit) ;

   this.http.post(this.url + 'AjoutProduits' , this.produit ).subscribe(res => console.log(res) , ex => console.log(ex)) ;

  }


  showModal1(): void {
    this.isVisible = true;
  }

  handleOk1(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel1(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  choisir(marque , categorie , souscat , typePa , tva , etat , unite , couleur , taille   ): void {
    this.marqueA = marque + ' :القيمة ';
    this.categorieA =  categorie  + ' :القيمة ';
    this.sousCatA = souscat  + ' :القيمة ' ;
    this.typePA = typePa  + ' :القيمة ';
    this.tvaA =  tva  + ' :القيمة ';
    this.etatA =  etat  + ' :القيمة ';
    this.uniteA = unite  + ' :القيمة ';
    this.couleurA = couleur  ;
    this.tailleA = taille  + ' :الحجم ';
    this.isVisible1 = false;

    setTimeout(() => {  this.http.get(this.url + 'AfficherProduits').subscribe(res => this.listOfData = res , ex => console.log(ex));

    }, 500);
  }

 delete(id){
    this.http.delete(this.url + 'DeleteProduits/' + id).subscribe(res => console.log(res) , ex => console.log(ex))  ;
    setTimeout(() => {  this.http.get(this.url + 'AfficherProduits').subscribe(res => this.listOfData = res , ex => console.log(ex));

    }, 500);
   }






log1(value: any): void {


  this.http.get(this.url + 'findByCategorie/'+this.categorie).subscribe(res => this.ListSousCategorie =  res , ex => console.log(ex)) ;

}

}


