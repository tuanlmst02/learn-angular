import { Component, OnInit } from '@angular/core';
import { SecuritiesService } from './securities.service';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css'],
  providers: [SecuritiesService]
})
export class SecuritiesComponent implements OnInit {
  code = '';
  txtCode = '';
  vol = null;
  sto: any;
  constructor(private securitiesService: SecuritiesService) { }

  ngOnInit(): void {
  }

  getVolume() {
    console.log(this.securitiesService.getVol(this.txtCode));
  }
}
