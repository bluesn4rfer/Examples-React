import PieChart from './views/PieChart';
import DonutChart from './views/DonutChart';
import BarChart from './views/BarChart';
import LineChart from './views/LineChart';

function Charts({ data, type = 'pie' }){
    switch(type.toLowerCase()){
        case "line":
            return <LineChart data={data} />;
        case "bar": 
            return <BarChart data={data} />;
        case "donut":
            return <DonutChart data={data} />;
        default: 
            return <PieChart data={data} />;
    }
}

export default Charts;