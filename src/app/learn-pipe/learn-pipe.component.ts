import { Component, OnInit } from '@angular/core';
import { promises } from 'dns';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2015, 7, 25);
  person = { name: 'Tuan', age: 30 };
  address = Promise.resolve('34 Trung Nu Vuong');
  constructor() { }

  ngOnInit(): void {
  }

}
