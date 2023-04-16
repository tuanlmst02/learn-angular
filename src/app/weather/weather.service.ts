import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class WeatherService {
    constructor(private http: HttpClient) { }

    getTemp(cityName: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=050a091c18d2766a94e20ca7ed2df4c5&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(res => res)
            .then((resJson: any) => resJson.main.temp);
    }
}