import {useEffect, useState} from "react";
import {getPrayerTimes, prayerTimes} from "../services/PrayerService.ts";

export default function Popup() {
    const [prayerTimes, setPrayerTimes] = useState<prayerTimes | undefined>();
    useEffect(() => {
        const fetchTimes = async () => {
            const times = await getPrayerTimes();
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
                        <li>Fajr:{prayerTimes.Fajr}</li>
                        <li>Dhuhr:{prayerTimes.Dhuhr}</li>
                        <li>Asr:{prayerTimes.Asr}</li>
                        <li>Maghrib:{prayerTimes.Maghrib}</li>
                        <li>Isha:{prayerTimes.Isha}</li>
                    </ul>
                </div>
                ): (
                <p>Chargement en cours</p>
            )}
        </div>
    );
}