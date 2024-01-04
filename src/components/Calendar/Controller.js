import { useState } from "react";

import CalendarDaily from './views/CalendarDaily'

function Calendar({ view = 'Monthly'}){
    return (
        <div>Calendar {view}</div>
    );
}

export default Calendar;