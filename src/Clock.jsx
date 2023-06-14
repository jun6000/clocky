import { useState, useEffect } from "react"
import "./styles/Clock.css"
import AnalogClock from "./components/AnalogClock"

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [time]);

    return (
        <div className="wrapper">
            <div className="digitalTime">{time}</div>
            <AnalogClock time={time}/>
        </div>
    );
}