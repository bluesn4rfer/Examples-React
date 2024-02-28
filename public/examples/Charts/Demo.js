const App = () => {
    // Example data to be passed to the pie chart
    const pieChartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      values: [12, 19, 3, 5, 2, 3],
    };

    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        values: [0, 10, 5, 2, 20, 30, 45],
        label: 'Dataset',
    };
  
    return (
      <div style={{ width: '60%', margin: '0 auto' }}>
        <div>
            <h2>My Responsive Pie Chart</h2>
            <Charts data={pieChartData} />
        </div>
        <div>
            <h2>My Responsive Donut Chart</h2>
            <Charts type='donut' data={pieChartData} />
        </div>
        <div>
            <h2>Monthly Sales</h2>
            <Charts type='bar' data={pieChartData} />
        </div>
        <div>
            <h2>Line Chart</h2>
            <Charts type='line' data={lineChartData} />
        </div>        
      </div>
    );
};