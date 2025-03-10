import {useEffect, useState} from "react";
import {getPrayerTimes, PrayerTimesResult} from "../services/PrayerService.ts";

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
                <div>
                    <ul>
                        <li>Fajr:{prayerTimes.fajr}</li>
                        <li>Dhuhr:{prayerTimes.dhuhr}</li>
                        <li>Asr:{prayerTimes.asr}</li>
                        <li>Maghrib:{prayerTimes.maghrib}</li>
                        <li>Isha:{prayerTimes.isha}</li>
                    </ul>
                </div>
                ): (
                <p>Chargement en cours</p>
            )}
        </div>
    );
}