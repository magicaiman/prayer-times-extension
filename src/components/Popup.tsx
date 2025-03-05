import {useEffect, useState} from "react";

export default function Popup() {
    const [prayerTimes, setPrayerTimes] = useState<any>(null);
    useEffect(() => {
        fetch('https://api.aladhan.com/v1/timingsByCity/05-03-2025?city=Bourg-en-Bresse&country=FR&state=Bourg-en-Bresse&method=3&shafaq=general&tune=5%2C3%2C5%2C7%2C9%2C-1%2C0%2C8%2C-6&timezonestring=Europe%2FParis&calendarMethod=UAQ')
            .then(res => res.json())
            .then(data => {
                setPrayerTimes(data.data.timings)
            })
            .catch((error) =>{
                console.error('Erreur lors de la récupération des heures de priére' ,error)
            })
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