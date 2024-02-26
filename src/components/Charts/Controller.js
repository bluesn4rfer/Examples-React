import PieChart from './views/PieChart';
import DonutChart from './views/DonutChart';
import BarChart from './views/BarChart';

function Charts({ data, type = 'pie' }){
    switch(type.toLowerCase()){
        case "bar": 
            return <BarChart data={data} />;
        case "donut":
            return <DonutChart data={data} />;
        default: 
            return <PieChart data={data} />;
    }
}

export default Charts;