import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-accueil-content',
  templateUrl: './accueil-content.component.html',
  styleUrls: ['./accueil-content.component.css']
})
export class AccueilContentComponent implements OnInit {

  url  = 'http://167.86.107.74:8081/farah/' ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url + 'getDepartements').subscribe(res => console.log(res) , ex => console.log(ex)) ;
  }

}
