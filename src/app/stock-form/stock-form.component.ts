import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  name = "";

  constructor() { }

  ngOnInit(): void {
  }

  eventKeyup(event: any) {
    // console.log('Hello');
    console.log(event);
    this.name = event.target.value;
  }

}
