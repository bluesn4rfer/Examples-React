import MenuBar from './views/MenuBar';
import Mini from './views/Mini';
import Daily from './views/Daily';
import Weekly from './views/Weekly';
import Monthly from './views/Monthly';

function Calendar({ view = 'Monthly', ...props}){
    const showView = (view) => {
        switch(view){
            case "Daily":
                return <Daily {...props} />;
            case "Weekly":
                return <Weekly {...props} />;
            default:
                return <Monthly {...props} />;
        }
    }

    return (
        <div class="d-flex flex-column">
            <div><MenuBar /></div>
            <div class="d-flex flex-row">
                <div><Mini /></div>
                <div>{showView(view)}</div>
            </div>
        </div>
    )

}

export default Calendar;