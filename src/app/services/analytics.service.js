import { of, timer, combineLatest } from 'rxjs';
import { repeat, switchMap, mapTo, delay, map } from 'rxjs/operators';

export const getTemperatureInfo = () => {
    return of('').pipe(
        switchMap(() =>
            timer(getRandomDelay(100, 2000)).pipe(mapTo(getRandomNumber()))),
        repeat()
    )
}

export const getAirPressureInfo = () => {
    return of('').pipe(
        switchMap(() =>
            timer(getRandomDelay(100, 2000)).pipe(mapTo(getRandomNumber()))),
        repeat()
    )
}

export const getHumidityInfo = () => {
    return of('').pipe(
        switchMap(() =>
            timer(getRandomDelay(100, 2000)).pipe(mapTo(getRandomNumber()))),
        repeat()
    )
}

export const getAnalyticsInfo = () => {
    return combineLatest([
        getTemperatureInfo(),
        getAirPressureInfo(),
        getHumidityInfo()
    ]).pipe(map(([temperature, airPressure, humidity]) => {
        if (!!temperature && !!airPressure && !!humidity) {
            return {temperature, airPressure, humidity};
        }
    }), delay(getRandomDelay(1, 100)))
}

const getRandomDelay = (bottom, top) => {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 200)
}
