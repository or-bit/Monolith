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

// IIFE used as Revealing module pattern
const BarChartFactory = (function iife() {
    const validateData = array => ChartUtils.isArrayOfObjects(array);

    const validateSize = ({ width, height }) => (
      typeof width === 'number' && typeof height === 'number'
    );

    const validateKeys = ({ xAxisDataKey, yAxisDataKeys }) => (
      typeof xAxisDataKey === 'string' &&
        ChartUtils.isArrayOfStrings(yAxisDataKeys)
    );

    const validateColors = colors => ChartUtils.isArrayOfStrings(colors);

    /**
     * Requires height to have been validated using validateSize().
     * @param height
     * @returns Height of the BarChart.
     */
     // eslint-disable-next-line arrow-body-style
    const getHeight = (height) => {
        return height > 0 ? height : BarChart.defaultHeight;
    };

    /**
     * Requires width to have been validated using validateSize().
     * @param width
     * @returns Width of the BarChart.
     */
     // eslint-disable-next-line arrow-body-style
    const getWidth = (width) => {
        return width > 0 ? width : BarChart.defaultWidth;
    };

    const getBars = (yAxisDataKeys, colors) => (
      yAxisDataKeys.map((value, index) => (
          <Bar
            key={value}
            dataKey={value}
            fill={colors[index % yAxisDataKeys.length]}
          />
        ))
      );

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
