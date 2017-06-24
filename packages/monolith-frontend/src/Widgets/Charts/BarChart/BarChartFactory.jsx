import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from './BarChart';

import Error from '../../Error/GenericError';

import ChartUtils from '../ChartUtils';

/**
 * This module creates instances of bar chart.
 * @module BarChartFactory
 * @type {{validateColors, validateKeys, validateSize, validateData, createBarChart}}
 */
// IIFE used as Revealing module pattern
const BarChartFactory = (function iife() {
    /**
     * Check if items of the array are objects
     * @function validateData
     * @param array {Array}
     */
    const validateData = array => ChartUtils.isArrayOfObjects(array);

    /**
     * Check if width and height are numbers
     * @function validateSize
     * @param width {Object}
     * @param height {Object}
     */
    const validateSize = ({ width, height }) => (
      typeof width === 'number' && typeof height === 'number'
    );

    /**
     * Check if xAxisDataKey is a string and yAxisDataKeys is an array of strings
     * @function validateKeys
     * @param xAxisDataKey {Object}
     * @param yAxisDataKeys {Array}
     */
    const validateKeys = ({ xAxisDataKey, yAxisDataKeys }) => (
      typeof xAxisDataKey === 'string' &&
        ChartUtils.isArrayOfStrings(yAxisDataKeys)
    );

    /**
     * Check if colors is an array of strings
     * @function validateColors
     * @param colors {Array}
     */
    const validateColors = colors => ChartUtils.isArrayOfStrings(colors);

    /**
     * Requires height to have been validated using validateSize().
     * @function getHeight
     * @param height {number}
     * @returns {number} Height of the BarChart.
     */
     // eslint-disable-next-line arrow-body-style
    const getHeight = (height) => {
        return height > 0 ? height : BarChart.defaultHeight;
    };

    /**
     * Requires width to have been validated using validateSize().
     * @function getWidth
     * @param width {number}
     * @returns {number} Width of the BarChart.
     */
     // eslint-disable-next-line arrow-body-style
    const getWidth = (width) => {
        return width > 0 ? width : BarChart.defaultWidth;
    };

    /**
     * Create the bars with the given label and color.
     * @function getBars
     * @param yAxisDataKeys {Array} Labels
     * @param colors {string} Colors
     */
    const getBars = (yAxisDataKeys, colors) => (
      yAxisDataKeys.map((value, index) => (
          <Bar
            key={value}
            dataKey={value}
            fill={colors[index % yAxisDataKeys.length]}
          />
        ))
      );

    /**
     * Create the chart.
     * @function createBarChart
     * @param data {number[]} Data to be processed
     * @param width {number} Width of the chart
     * @param height [number} Height of the chart
     * @param xAxisDataKey {string} Label for the X axis
     * @param yAxisDataKeys {string[]} Labels for the Y axis
     * @param colors {string[]} Colors to use for different bars
     * @return {React.Component}
     * @see http://recharts.org/#/en-US/api/BarChart
     */
    const createBarChart = (
      data,
      { width, height },
      { xAxisDataKey, yAxisDataKeys },
      colors) => {
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

        // now let's check chart size
        if (!validateSize({ width, height })) {
            console.warn(
              'Check the object size: width and height are not numbers'
            );
        }

        // last check: dataKeys
        if (!validateKeys({ xAxisDataKey, yAxisDataKeys })) {
            return (
                <Error
                  errorMessage="Check the object data keys:\
                   xAxisDataKey must be a string and \
                   yAxisDataKey must be a string array"
                  input={{ xAxisDataKey, yAxisDataKeys }}
                />
            );
        }

        let colorsToUse = colors;

        if (!validateColors(colors)) {
            colorsToUse = ChartUtils.predefinedColors;
        }

        return (
            <BarChart
              width={getWidth(width)}
              height={getHeight(height)}
              data={data}
            >
                <XAxis dataKey={xAxisDataKey} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                {getBars(yAxisDataKeys, colorsToUse)}
            </BarChart>
        );
    };

    return {
        validateColors,
        validateKeys,
        validateSize,
        validateData,
        createBarChart,
    };
}());

export default BarChartFactory;
