import {CalculationMethod, Coordinates, PrayerTimes} from "adhan";

export type PrayerTimesResult = {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
}

export async function getPrayerTimes():Promise<PrayerTimesResult | undefined> {
    try{
        const coordinates = new Coordinates(46.211794825337954, 5.219477477909756);
        const params = CalculationMethod.MoonsightingCommittee();
        params.fajrAngle = 12;
        params.ishaAngle = 12;
        const date = new Date(2025,2,10);
        const prayerTimes = new PrayerTimes(coordinates, date, params);
        const toLocalTime = (time: Date | null): string =>
            time
                ?  time.toLocaleString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Europe/Paris",
                })
                : "N/A";

        return {
            fajr: toLocalTime(prayerTimes.fajr),
            dhuhr: toLocalTime(prayerTimes.dhuhr),
            asr: toLocalTime(prayerTimes.asr),
            maghrib: toLocalTime(prayerTimes.maghrib),
            isha: toLocalTime(prayerTimes.isha),
        };
    }catch (e) {
        console.error(e);
        return undefined;
    }
}