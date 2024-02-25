import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-caract-transfert',
  templateUrl: './caract-transfert.component.html',
  styleUrls: ['./caract-transfert.component.css']
})
export class CaractTransfertComponent implements OnInit {

  isVisible = false;
  isVisible1 = false;
  map : any ;
  List : any ;
  Destinateur : any ;
  Destinatair : any ;
  type : any ;
  prix : any ;
  dateDemission : any ;
  quantite : any ;
  demandeFourniture :any ;
  FournisseurList : any ;
  BDCList : any ;
  etatLivraison : any ;
  typeTransfert : any ;
  date : any ;
  flux : any ;
Users : any ;
  DateS : any ;
  DestSearch : any ;
  EtatSearch : any ;
  constructor(private http : HttpClient , private message: NzMessageService) {}

  url  = 'http://167.86.107.74:8081/farah/' ;
  showModal(): void {
    this.isVisible = true;
    this.RemoveElementFromObjectArray(this.Destinateur , this.Users) ;

  }

  showModal1(): void {
    this.isVisible1 = true;
  }
  handleOk1(): void {


    const founisseur =   (<HTMLInputElement> document.getElementById('fournisseur')).value;
    const region =  (<HTMLInputElement> document.getElementById('localisation')).value;
    this.isVisible1 = false;
    this.http.get<any>(this.url+'AjoutActionSurStock/'+this.typeTransfert+'/'+this.date+'/'+founisseur+'/interne/'+region+'/'+this.flux).subscribe(res => console.log(res)  , ex => console.log(ex)) ;
    this.message.create("success", `حالة التحويل ajouté avec succéss`);

    }

    handleCancel1(): void {
      console.log('Button cancel clicked!');
      this.isVisible1 = false;
    }


  handleOk(): void {
  this.isVisible = false;

    this.http.get<any>(this.url+'AjoutBonDeCommande/'+this.Destinateur+'/'+this.Destinatair+'/'+this.type+'/'+this.prix+'/'+this.dateDemission+'/'+this.quantite+'/'+this.demandeFourniture ).subscribe(res => console.log(res)  , ex => console.log(ex)) ;
    this.message.create("success", `bon de commande ajouté avec succéss`);


  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  delete(id : any){ this.http.delete(this.url+'DeleteAction/'+id).subscribe(res => console.log(res) , ex => console.log(ex))}


  deleteRapport(id : any){ this.http.delete(this.url+'DeleteBonDeCommande/'+id).subscribe(res => console.log(res) , ex => console.log(ex))}

  ngOnInit(): void {

    this.http.get(this.url + 'AfficherUsers').subscribe(res => this.Users = res  , ex => console.log(ex)) ;
    this.Destinateur = localStorage.getItem('email')  ;
    this.http.get(this.url + 'AfficherFournisseurs').subscribe(res => this.FournisseurList =  res , ex => console.log(ex)) ;
    this.http.get<any>(this.url+'GetWilaya').subscribe(res => this.map = res , ex => console.log(ex)) ;
    this.http.get<any>(this.url+'AfficherBonDeCommande').subscribe(res => this.BDCList = res , ex => console.log(ex)) ;
    setInterval(() => {      this.http.get(this.url + 'AfficherActionSurStock').subscribe(res => this.List =  res , ex => console.log(ex)) ;
  }, 1000);

  }




  Reportsearch() {


// recherche par dateS et destsearch 
    this.http.get<any>(this.url+'AfficherBonDeCommande/'+this.DestSearch+'/'+this.DateS)
    .subscribe(
      res => {
        this.BDCList = res;
        const filteredData = this.BDCList.filter((data) => {
          const isDateMatch = !this.DateS || data.dateDemission === this.DateS;
          const isDestSearchMatch = !this.DestSearch || data.destinatair === this.DestSearch;
          return isDateMatch && isDestSearchMatch;
        });
        this.BDCList = filteredData;
      },
      ex => console.log(ex)
    );
    
  }


  all()
  {    this.http.get<any>(this.url+'AfficherBonDeCommande').subscribe(res => this.BDCList = res , ex => console.log(ex)) ;
}



RemoveElementFromObjectArray(key: string , Object:any) {
  Object.forEach((value,index)=>{
      if(value.email==key) Object.splice(index,1);
  });
}

log2(value: any): void {


  this.RemoveElementFromObjectArray(this.Destinateur , this.Users) ;
  console.log(this.Destinateur);
}



}
