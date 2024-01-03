import { useState } from "react";

function Calendar({ view = 'Monthly'}){
    return (
        <div>Calendar {view}</div>
    );
}

export default Calendar;