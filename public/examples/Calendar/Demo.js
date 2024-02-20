function App() {
    const events = [
        { id: 1, title: "Meeting", date: "2024-06-03" },
        { id: 2, title: "Doctor's Appointment", date: "2024-06-15" },     
        // More events...
    ];

    const previousMonth = () => {
        alert('Previous Month');
    }

    const nextMonth = () => {
        alert('Next Month');
    }

	return <Calendar view='Monthly' events={events} onPrevMonth={previousMonth} onNextMonth={nextMonth} />;
}