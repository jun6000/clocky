import "../styles/AnalogClock.css";

export default function AnalogClock({ time }) {
    const [hours, minutes, seconds] = time.split(' ')[0].split(':').map(n => parseInt(n));

    const secondsStyle = seconds === 0 ? {
        transition: `none`,
        animation: `lastSecond`,
        animationDuration: `500ms`,
    } : {
        transform: `rotate(${seconds * 6}deg)`,
    };

    return (
        <div className="frameOuter">
            <div className="frameInner">
                <div className="twelve">12</div>
                <div className="hourNeedle" style={{ transform: `rotate(${hours * 30 + minutes * 0.5}deg)`}}></div>
                <div className="minuteNeedle" style={{ transform: `rotate(${(minutes + seconds / 60) * 6}deg)`}}></div>
                <div className="secondNeedle" style={secondsStyle}></div>
            </div>
        </div>
    );
}