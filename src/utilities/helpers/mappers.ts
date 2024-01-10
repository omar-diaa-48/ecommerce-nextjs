import { IPagination } from "../interfaces/pagination.interface";

export const mapToPagination = (limit: number = 10, offset: number = 0): IPagination => ({
    limit,
    offset
})

export const mapArrayToArraysOfDifferentLengths = (inputArray: any[], patterns: number[] = [3, 2]): any[][] => {
    let result = [];
    let currentIndex = 0;

    while (currentIndex < inputArray.length) {
        for (let size of patterns) {
            if (currentIndex < inputArray.length) {
                result.push(inputArray.slice(currentIndex, currentIndex + size));
                currentIndex += size;
            }
        }
    }

    return result;
}
