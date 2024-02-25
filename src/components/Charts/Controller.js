import PieChart from './views/PieChart';
import DonutChart from './views/DonutChart';

function Charts({ data, type = 'pie' }){
    switch(type.toLowerCase()){
        case "donut":
            return <DonutChart data={data} />;
        default: 
            return <PieChart data={data} />;
    }
}

export default Charts;