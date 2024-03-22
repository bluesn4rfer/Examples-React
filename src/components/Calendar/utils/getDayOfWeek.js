export default function getDayOfWeek(year, month, day){
    // Create a new Date object
    const date = new Date(year, month - 1, day); // Adjust month - 1 because JavaScript months are 0-indexed

    // Array of week days
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the day of the week
    return(weekDays[date.getDay()]);
}