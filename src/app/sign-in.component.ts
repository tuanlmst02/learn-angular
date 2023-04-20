import { Component } from "@angular/core";

@Component({
    selector: 'app-sign-in',
    template: `
            <form (ngSubmit)="onSubmit(FormSubmit)" #FormSubmit="ngForm">
                <input type="text" placeholder="Input your email" #txtEmail="ngModel" ngModel name="email" required email/>
                <p *ngIf="txtEmail.touched && txtEmail.invalid">Email is required</p>
                <p *ngIf="txtEmail.touched && txtEmail.invalid">Email is not valid</p>
                <input type="password" placeholder="Input your password" #txtPassword="ngModel" ngModel name="password" minlength="6" pattern="[a-z]*"/>
                <br/><br/>
                <div ngModelGroup="Subject">
                    <label><input type="checkbox" [ngModel]="false" name="NodeJS" /> NodeJS</label>
                    <label><input type="checkbox" [ngModel]="false" name="Angular" /> Angular</label>
                    <label><input type="checkbox" [ngModel]="false" name="ReactJS" /> ReactJS</label>
                </div>
                <br/><br/>
                <button [disabled]="FormSubmit.invalid">Click me</button>
                <p>{{ txtEmail.errors | json }}</p>
                <p>{{ txtPassword.errors | json }}</p>
                <p>{{ FormSubmit.value | json }}</p>

            </form>
            `,
})

export class SignInComponent {
    email = '';
    password = '';
    result = '';

    onSubmit(FormSubmit: any) {
        // console.log(FormSubmit.controls.email.status);

        console.log(FormSubmit);
    }
}