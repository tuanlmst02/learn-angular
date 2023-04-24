import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class SignInService {
    constructor(private http: HttpClient) { }

    sendPost(object: any) {
        const url = 'http://localhost:3000/signin';
        // console.log(object.value);
        return this.http.post(url, object, { responseType: 'text' })
            .toPromise()
            .then(res => res)
            .then(restText => console.log(restText));
    }
}

