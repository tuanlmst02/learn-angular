import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    { name: 'Ti', age: 10 },
    { name: 'Teo', age: 15 },
    { name: 'Tun', age: 23 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  removePerson(name: string) {
    const iPerson = this.arrPeople.findIndex(item => item.name === name);
    this.arrPeople.splice(iPerson, 1);
  }

}
