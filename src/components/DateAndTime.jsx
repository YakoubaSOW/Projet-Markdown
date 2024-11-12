import  {useEffect, useState} from 'react'
import PropTypes from "prop-types";

function DateAndTime({date, time}) {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const time = new Date();
            const formatTime = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            setCurrentTime(formatTime);

            const jour = new Date();
            const options = {year: 'numeric', month: 'long', day: 'numeric'};
            const formatDate = jour.toLocaleDateString('en-US', options);
            setCurrentDate(formatDate);
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const display = () => {
        if (date) {
            return currentDate;
        } else if (time) {
            return currentTime;
        } else {
            return `${currentDate} ${currentTime}`;
        }
    }

    return (
        <div>
            {display()}
        </div>
    );
}

export default DateAndTime

DateAndTime.propTypes = {
    date: PropTypes.bool,
    time: PropTypes.bool
}

DateAndTime.defaultProps = {
    date: false,
    time: false
}