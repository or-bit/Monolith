
const ChartUtils = (() => {
    /* eslint-disable valid-typeof */
    const isArrayOfType = (array, type) => (
        Array.isArray(array) &&
        array.every(value => typeof value === type)
    );

    const isArrayOfStrings = array => isArrayOfType(array, 'string');

    const isArrayOfObjects = array => isArrayOfType(array, 'object');

    return {
        isArrayOfObjects,
        isArrayOfStrings,
        // colors taken from: http://www.mulinblog.com/a-color-palette-optimized-for-data-visualization/
        predefinedColors: [
            '#4D4D4D', // (gray)
            '#5DA5DA', // (blue)
            '#FAA43A', // (orange)
            '#60BD68', // (green)
            '#F17CB0', // (pink)
            '#B2912F', // (brown)
            '#B276B2', // (purple)
            '#DECF3F', // (yellow)
            '#F15854', // (red)
        ],
    };
})();

export default ChartUtils;
