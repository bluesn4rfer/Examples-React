const App = () => {
    // Example data to be passed to the pie chart
    const chartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      values: [12, 19, 3, 5, 2, 3],
    };
  
    return (
      <div style={{ width: '60%', margin: '0 auto' }}>
        <h2>My Responsive Pie Chart</h2>
        <Charts data={chartData} />
      </div>
    );
};