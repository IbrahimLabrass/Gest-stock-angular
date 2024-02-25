import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-stock',
  templateUrl: './agent-stock.component.html',
  styleUrls: ['./agent-stock.component.css']
})
export class AgentStockComponent implements OnInit {

  constructor() { }

  visible = false;
  isVisible1 = false;
  isVisible2  = false;
  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
