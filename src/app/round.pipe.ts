import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'roundNum' })

export class RoundPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, addNum: number): number {
        if (isUpper) {
            return Math.ceil(value + addNum);
        }
        return Math.floor(value + addNum);

    }
}