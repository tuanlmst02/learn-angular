import { Component } from "@angular/core";
import { SignInService } from "./sign-in.service";

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
            </form>
            <br>
            <!-- <button (click)="postToExpress()">POST</button> -->
            <p>{{ txtEmail.errors | json }}</p>
            <p>{{ txtPassword.errors | json }}</p>
            <p>{{ FormSubmit.value | json }}</p>
            `,
    providers: [SignInService]
})

export class SignInComponent {
    email = '';
    password = '';
    result = '';

    constructor(private signinService: SignInService) {

    }

    onSubmit(FormSubmit: any) {
        // console.log(FormSubmit.controls.email.status);
        // console.log('Thanh Cong');
        this.signinService.sendPost(FormSubmit.value).catch(err => err).then(res => res);
    }

    // postToExpress() {
    //     const url = 'http://localhost:3000/signin';

    //     return this.http.post(url, { name: 'tuan huyen' }, { responseType: 'text' })
    //         .toPromise()
    //         .then(res => res)
    //         .then(restText => console.log(restText));
    // }


}