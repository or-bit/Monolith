import React from 'react';

import { Pie, PieChart } from './PieChart';
import Error from '../../Error/GenericError';

import ChartUtils from '../ChartUtils';

// IIFE used as Revealing module pattern
const PieChartFactory = (function iife() {
    const validateData = array => ChartUtils.isArrayOfObjects(array);

    const validateSize = ({ width, height }) => (
        typeof width === 'number' && typeof height === 'number'
    );

    const validateCenterCoordinates = (widthX, widthY) => (
        typeof widthX === 'number' && widthX > 0 &&
                typeof widthY === 'number' && widthY > 0
    );

    const validateRadii = (innerRadius, outerRadius) => (
        typeof innerRadius === 'number' && innerRadius > 0 &&
            typeof outerRadius === 'number' && outerRadius > 0
    );

    const validateColor = color => typeof color === 'string';

    /**
     * Requires height to have been validated using validateSize().
     * @param height
     * @returns Height of the PieChart.
     */
    const getHeight = (height) => {
        if (height > 0) {
            return height;
        }
        return PieChart.defaultHeight;
    };

    /**
     * Requires width to have been validated using validateSize().
     * @param width
     * @returns Width of the PieChart.
     */
    const getWidth = (width) => {
        if (width > 0) {
            return width;
        }
        return PieChart.defaultWidth;
    };

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
