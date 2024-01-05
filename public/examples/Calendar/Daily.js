function App() {
    const events = [
        { id: 1, title: "Meeting with Team", startTime: 9, endTime: 10 },
        { id: 2, title: "Lunch Break", startTime: 12, endTime: 13 },       
        // More events...
    ];

	return <Calendar view='Daily' events={events} />;
}
