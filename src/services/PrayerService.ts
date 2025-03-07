export type prayerTimes = {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

export async function getPrayerTimes():Promise<prayerTimes | undefined> {
    try{
     const response = await fetch('https://api.aladhan.com/v1/timingsByCity/05-03-2025?city=Bourg-en-Bresse&country=FR&state=Bourg-en-Bresse&method=3&shafaq=general&tune=5%2C3%2C5%2C7%2C9%2C-1%2C0%2C8%2C-6&timezonestring=Europe%2FParis&calendarMethod=UAQ');
     if(!response.ok){
         console.log(response.statusText);
         return undefined;
     }
     const data = await response.json();
     return data.data.timings;
    }catch (e) {
        console.error(e);
        return undefined;
    }
}