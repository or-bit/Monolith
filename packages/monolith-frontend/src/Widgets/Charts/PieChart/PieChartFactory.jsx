import React from 'react';

import { Pie, PieChart } from './PieChart';
import Error from '../../Error/GenericError';

import ChartUtils from '../ChartUtils';

// IIFE used as a Revealing module pattern
/**
 * This module creates an instance of a PieChart.
 * @module PieChartFactory
 * @type {{validateColor, validateCenterCoordinates, validateSize, validateRadii, validateData, createPieChart}}
 */
const PieChartFactory = (function iife() {
    /**
     * Check if the array's items are objects.
     * @function validateData
     * @param array {Array}
     */
    const validateData = array => ChartUtils.isArrayOfObjects(array);

    /**
     * Check if width and height are numbers.
     * @function validateSize
     * @param width {Object}
     * @param height {Object}
     */
    const validateSize = ({ width, height }) => (
        typeof width === 'number' && typeof height === 'number'
    );

    /**
     * Check if the dimensions are numbers greater than 0.
     * @function validateCenterCoordinates
     * @param widthX {*}
     * @param widthY {*}
     */
    const validateCenterCoordinates = (widthX, widthY) => (
        typeof widthX === 'number' && widthX > 0 &&
                typeof widthY === 'number' && widthY > 0
    );

    /**
     * Check if the given radius dimensions are numbers greater than 0.
     * @param innerRadius {*}
     * @param outerRadius {*}
     */
    const validateRadii = (innerRadius, outerRadius) => (
        typeof innerRadius === 'number' && innerRadius > 0 &&
            typeof outerRadius === 'number' && outerRadius > 0
    );

    /**
     * Check if colors is an array of strings.
     * @function validateColors
     * @param colors {Array}
     */
    const validateColor = color => typeof color === 'string';

    /**
     * Requires height to have been validated using validateSize().
     * @param height {number}
     * @returns {number} Height of the PieChart
     */
    const getHeight = (height) => {
        if (height > 0) {
            return height;
        }
        return PieChart.defaultHeight;
    };

    /**
     * Requires width to have been validated using validateSize().
     * @param width {number}
     * @returns {number} Width of the PieChart
     */
    const getWidth = (width) => {
        if (width > 0) {
            return width;
        }
        return PieChart.defaultWidth;
    };

    /**
     * Create the pie chart.
     * @param data {number[]} Data to be processed
     * @param width {number} Width of the chart
     * @param height {number} Height of the chart
     * @param startAngle {number} The start angle of first sector
     * @param endAngle {number} The end angle of last sector, which should be unequal to startAngle
     * @param centerX {Percentage | number} The x-coordinate of center
     * @param centerY {Percentage | number} The y-coordinate of center
     * @param innerRadius {Percentage | number} Inner radius size
     * @param outerRadius {Percentage | number} Outer radius size
     * @param label {string} Label for the chart
     * @param color {string} Color of the pie
     * @return {React.Component}
     * @see http://recharts.org/#/en-US/api/Pie
     */
    const createPieChart = (data,
                            { width, height },
                            { startAngle, endAngle },
                            { centerX, centerY },
                            { innerRadius, outerRadius },
                            label,
                            color
    ) => {
        // check for input errors first
        // checking data
        if (!validateData(data)) {
            return (
                <Error
                  errorMessage="\'data\' object is not an array.\
                      Only array can be plotted in the chart."
                  input={data}
                />
            );
        }

        if (!validateCenterCoordinates(centerX, centerY)) {
            return (
                <Error
                  errorMessage="Margins not valid.\
                      They must be positive numbers."
                  input={data}
                />
            );
        }

        if (!validateRadii(innerRadius, outerRadius)) {
            return (
                <Error
                  errorMessage="InnerRadius/OuterRadius not valid.\
                      They must be positive numbers."
                  input={data}
                />
            );
        }

        // now let's check chart size
        if (!validateSize({ width, height })) {
            console.warn(
                'Check the object size: width and height are not numbers'
            );
        }

        let colorToUse = color;

        if (!validateColor(color)) {
            // orange
            colorToUse = ChartUtils.predefinedColors[2];
        }

        return (
            <PieChart width={getWidth(width)} height={getHeight(height)}>
                <Pie
                  startAngle={startAngle}
                  endAngle={endAngle}
                  data={data}
                  cx={centerX}
                  cy={centerY}
                  outerRadius={outerRadius}
                  innerRadius={innerRadius}
                  fill={colorToUse}
                  label={label ? true : undefined}
                />
            </PieChart>
        );
    };

    return {
        validateColor,
        validateCenterCoordinates,
        validateSize,
        validateRadii,
        validateData,
        createPieChart,
    };
}());

export default PieChartFactory;
