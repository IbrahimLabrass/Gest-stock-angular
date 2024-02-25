import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private http : HttpClient) { }
  url = 'http://167.86.107.74:8081/farah/';
  dataSet  : any ;
  visible = false;
  isVisible1 = false;
  isVisible2  = false;
  login : any ;
  term : any ;
  ngOnInit(): void {

    this.http.get(this.url + 'GetFormsByStructure/' + localStorage.getItem('structure')).subscribe(res => this.dataSet = res, ex => console.log(ex));

    this.login =  localStorage.getItem('login') ;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }




  showModal(): void {
    this.isVisible1 = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible1 = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible1 = false;
  }




  showModal1(): void {
    this.isVisible2 = true;
  }

  handleOk1(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }

  handleCancel1(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }







}
