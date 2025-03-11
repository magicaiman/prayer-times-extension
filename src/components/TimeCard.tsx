
interface TimeCardProps {
    prayerName: string;
    prayerTime: string;
}
export default function TimeCard({ prayerName,prayerTime }: TimeCardProps) {
    return(
        <div className="m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <p>{prayerName}</p>
            <h2>{prayerTime}</h2>
        </div>
    );
}