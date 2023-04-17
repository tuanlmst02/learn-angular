import { Component } from "@angular/core";

@Component({
    selector: 'app-sign-in',
    template: `
            <form (submit)="onSubmit(FormSubmit)" #FormSubmit="ngForm">
                <input type="text" placeholder="Input your email" [(ngModel)]="email" name="email" />
                <input type="password" placeholder="Input your password" [(ngModel)]="password" name="password" />
                <br/><br/>
                <button>Click me</button>
            </form>
            `,
})

export class SignInComponent {
    email = '';
    password = '';

    onSubmit(FormSubmit: any) {
        console.log(this.email);
        console.log(this.password);
        console.log(FormSubmit.value);
    }
}