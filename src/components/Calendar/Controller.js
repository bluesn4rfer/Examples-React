import Daily from './views/Daily'
import Weekly from './views/Weekly'
import Monthly from './views/Monthly'

function Calendar({ view = 'Monthly', ...props}){
    switch(view){
        case "Daily":
            return <Daily {...props} />;
        case "Weekly":
            return <Weekly {...props} />;
        default:
            return <Monthly {...props} />;
    }
}

export default Calendar;