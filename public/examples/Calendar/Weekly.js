function App() {
    const events = [
        { id: 1, title: "Team Meeting", day: "Monday", startTime: 9, endTime: 10 },
        { id: 2, title: "Lunch Break", day: "Tuesday", startTime: 12, endTime: 13 },    
        // More events...
    ];

	return <Calendar view='Weekly' events={events} />;
}