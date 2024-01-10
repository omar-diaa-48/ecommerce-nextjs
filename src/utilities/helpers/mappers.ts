import { IPagination } from "../interfaces/pagination.interface";

export const mapToPagination = (limit: number = 10, offset: number = 0): IPagination => ({
    limit,
    offset
})

export const mapArrayToArraysOfDifferentLengths = (inputArray: any[], pattern: number[] = [3, 2]): any[][] => {
    let result = [];
    let currentIndex = 0;

    for (let length of pattern) {
        if (currentIndex + length <= inputArray.length) {
            result.push(inputArray.slice(currentIndex, currentIndex + length));
            currentIndex += length;
        } else {
            break;
        }
    }

    return result;
}
