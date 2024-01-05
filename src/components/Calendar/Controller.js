import CalendarDaily from './views/CalendarDaily'
import CalendarWeekly from './views/CalendarWeekly'
import CalendarMonthly from './views/CalendarMonthly'

function Calendar({ view = 'Monthly', ...props}){
    switch(view){
        case "Daily":
            return <CalendarDaily {...props} />;
        case "Weekly":
            return <CalendarWeekly {...props} />;
        default:
            return <CalendarMonthly {...props} />;
    }
}

export default Calendar;