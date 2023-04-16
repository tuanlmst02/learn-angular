import { Component } from "@angular/core";

@Component({
    selector: '<app-em>',
    template: `<h3> Gia tri {{ value }}</h3>`
})

export class EmComponent {
    value = 0
}