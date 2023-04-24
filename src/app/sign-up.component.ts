import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="formSignUp">
            <input placeholder="Email" type="email" formControlName="email" />
            <p *ngIf="formSignUp.controls['email'].invalid && formSignUp.controls['email'].touched">Email is required</p>
            <br><br>
            <input placeholder="Password" type="password" formControlName="password" />
            <br><br>
            <div formGroupName="subject">
                <label><input type="checkbox" name="NodeJS" formControlName="nodeJS" /> NodeJS</label>
                <label><input type="checkbox" name="Angular" formControlName="angularJS" /> Angular</label>
                <label><input type="checkbox" name="ReactJS" formControlName="reactJS" /> ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignUp.invalid">Submit</button>
        </form>
        <code>{{ formSignUp.controls['email'].errors | json }}</code>
    `,
})

export class SignUpComponent implements OnInit {
    formSignUp: FormGroup;
    constructor(private fb: FormBuilder) {

    }
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        this.formSignUp = this.fb.group({
            email: ['', [Validators.email, gmailValidator]],
            password: '',
            subject: this.fb.group({
                nodeJS: true,
                angularJS: false,
                reactJS: true
            })
        });
    }

    onSubmit() {
        console.log(this.formSignUp.value);
    }
}

function gmailValidator(formControl: FormControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null;
    }
    return { gmail: true };
}