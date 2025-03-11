import {useEffect, useState} from "react";
import {getPrayerTimes, PrayerTimesResult} from "../services/PrayerService.ts";
import TimeCard from "./TimeCard.tsx";

export default function Popup() {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTimesResult | undefined>();
    useEffect(() => {
        const fetchTimes = async () => {
            const times = await getPrayerTimes();
            console.log(times);
            setPrayerTimes(times);
        };
        fetchTimes();
    }, []);
    return (
        <div>
            <h1>Heures de prière</h1>
            {prayerTimes ? (
                <div className="flex space-y-4">
                    <TimeCard prayerName={'Fajr'} prayerTime={prayerTimes.fajr}></TimeCard>
                    <TimeCard prayerName={'Dhuhr'} prayerTime={prayerTimes.dhuhr}></TimeCard>
                    <TimeCard prayerName={'Asr'} prayerTime={prayerTimes.asr}></TimeCard>
                    <TimeCard prayerName={'Maghrib'} prayerTime={prayerTimes.maghrib}></TimeCard>
                    <TimeCard prayerName={'Isha'} prayerTime={prayerTimes.isha}></TimeCard>
                </div>
                ): (
                <p>Chargement en cours</p>
            )}
        </div>
    );
}