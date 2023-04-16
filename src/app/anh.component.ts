import { Component, ViewChild } from "@angular/core";
import { EmComponent } from "./em.component";

@Component({
    selector: '<app-anh>',
    template: `<app-em></app-em>
                <button (click)="AddItem()">Click Tang Gia Tri</button>`
})

export class AnhComponent {
    @ViewChild(EmComponent)

    newEm: EmComponent;

    AddItem() {
        this.newEm.value++
    }
}