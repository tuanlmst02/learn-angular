import { Component, OnInit } from "@angular/core";
import { IpService } from "./ip.service";

@Component({
    selector: 'app-ip',
    template: `<h3>{{ IP }}</h3>`,
    providers: []
})

export class IpComponent implements OnInit {
    IP: string;

    constructor(private ipService: IpService) { }
    ngOnInit(): void {
        this.ipService.getIp()
            .catch(err => console.log(err))
            .then(resJson => this.IP = resJson.ip);
    }
}