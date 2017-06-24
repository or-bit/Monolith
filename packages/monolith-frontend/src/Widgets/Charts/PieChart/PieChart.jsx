import { PieChart as PieRechart, Pie } from 'recharts';

/**
 * For the documentation and examples go to http://recharts.org
 */

/**
 * @class PieChart - Defines a pie chart graphic.
 * @extends PieReChart
 */
class PieChart extends PieRechart {
    render() {
        return super.render();
    }
}

PieChart.defaultWidth = 400;
PieChart.defaultHeight = 300;

export { PieChart, Pie };

