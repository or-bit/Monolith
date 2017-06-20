// import React from 'react';
//
// import { Pie, PieChart } from './PieChart';
// import Error from '../../Error/GenericError';
//
// import ChartUtils from '../ChartUtils';
//
// // IIFE used as Revealing module pattern
// const PieChartFactory = (function iife() {
//     const defaultStartAngle = 180;
//     const defaultEndAngle = 0;
//
//     const validateData = array => ChartUtils.isArrayOfObjects(array);
//
//     const validateSize = ({ width, height }) => {
//         return typeof width === 'number' && typeof height === 'number';
//     };
//
//     const validateKeys = ({ xAxisDataKey, yAxisDataKeys }) => {
//         return typeof xAxisDataKey === 'string' &&
//             ChartUtils.isArrayOfStrings(yAxisDataKeys);
//     };
//
//     const validateColors = colors => ChartUtils.isArrayOfStrings(colors);
//
//     /**
//      * Requires height to have been validated using validateSize().
//      * @param height
//      * @returns Height of the BarChart.
//      */
//     const getHeight = height => height > 0 ? height : BarChart.defaultHeight;
//
//     /**
//      * Requires width to have been validated using validateSize().
//      * @param width
//      * @returns Width of the BarChart.
//      */
//     const getWidth = width => width > 0 ? width : BarChart.defaultWidth;
//
//     const getBars = (yAxisDataKeys, colors) => {
//         return yAxisDataKeys.map((value, index) => {
//             return (
//                 <Bar
//                     key={index}
//                     dataKey={value}
//                     fill={colors[index % yAxisDataKeys.length]}
//                 />
//             );
//         });
//     };
//
//     const createPieChart = (data, { width, height }, { startAngle, endAngle }, {xAxisDataKey, yAxisDataKeys}, colors) => {
//         // check for input errors first
//         // checking data
//         // if (!validateData(data)) {
//         //     return <Error
//         //         errorMessage="\'data\' object is not an array. Only array can be plotted in the chart."
//         //         input={data} />;
//         // }
//
//         // now let's check chart size
//         // if (!validateSize({ width, height })) {
//         //     console.warn('Check the object size: width and height are not numbers');
//         // }
//
//         // last check: dataKeys
//         // if (!validateKeys({ xAxisDataKey, yAxisDataKeys })) {
//         //     return <Error
//         //         errorMessage="Check the object data keys: xAxisDataKey must be a string and yAxisDataKey must be a string array"
//         //         input={ { xAxisDataKey, yAxisDataKeys } }
//         //     />;
//         // }
//
//         // let colorsToUse = colors;
//
//         // if (!validateColors(colors)) {
//         //     colorsToUse = predefinedColors;
//         // }
//
//         return (
//             <PieChart width={getWidth(width)} height={getHeight(height)}>
//                 <Pie startAngle={startAngle} endAngle={endAngle} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
//             </PieChart>
//         );
//     };
//
//     return {
//         validateColors,
//         validateKeys,
//         validateSize,
//         validateData,
//         createPieChart,
//     };
// })();
//
// export default PieChartFactory;
