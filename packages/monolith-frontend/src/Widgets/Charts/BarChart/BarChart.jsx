import {
    BarChart as BarReChart,
    Bar,
    Legend,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis,
} from 'recharts';

/**
 * @class Defines a bar chart graphic.
 * @extends Recharts.BarChart
 */
class BarChart extends BarReChart {
    /**
     * For the documentation and examples go to http://recharts.org
     */
    render() {
        return super.render();
    }
}

BarChart.defaultWidth = 400;
BarChart.defaultHeight = 300;

export { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar };
