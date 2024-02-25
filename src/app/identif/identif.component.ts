import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-identif',
  templateUrl: './identif.component.html',
  styleUrls: ['./identif.component.css']
})
export class IdentifComponent implements OnInit {
  mdp: any;
  login: any;

  constructor(private router: Router , private message: NzMessageService , private http : HttpClient) { }

  ngOnInit(): void {
  }

  acces(    )
  {


this.http.get<any>('http://167.86.107.74:8081/farah/Login/' + this.login + '/' + this.mdp).subscribe(res => {

  if (this.login === res.email &&  this.mdp === res.password ){

    localStorage.setItem('UserId', res.id);
    localStorage.setItem('structure' , res.structure) ;
    localStorage.setItem('email' , res.email) ;

    this.router.navigate(['/etatmat']);
    this.message.create('success', `Bienvenue ` + this.login );
    localStorage.setItem('login' , this.login ) ;

  }} );
if (this.login === 'admin' ){ this.router.navigate(['/Accueil']);   this.message.create('success', `Bienvenue Admin`); }



  }



}
