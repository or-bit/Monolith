/**
 * Creates a generator for the configuration of bubbles.
 * @module ConfigurationGenerator
 * @type {{defaultJSONConfiguration, generateRoutesConfiguration, generateAllCode}}
 */
const configurationGenerator = (function iife() {
    const METEOR_CODE = data => [
        'Meteor.startup(() => {',
        `  Meteor.settings.routes = ${data};`,
        '});',
    ].join('\n');

    /**
     * @member defaultJSONConfiguration {JSON}
     * @type {{spaces: string}}
     */
    const defaultJSONConfiguration = {
        spaces: '  ',
    };

    /**
     * Generates a configuration for the routes
     * @function generateRoutesConfiguration
     * @param routesCollection
     * @param jsonConfiguration
     */
    const generateRoutesConfiguration = (
      routesCollection,
      jsonConfiguration = defaultJSONConfiguration
    ) => new Promise((resolve, reject) => {
        if (!routesCollection) {
            return reject('Routes collection argument is undefined');
        }
        if (!routesCollection.serialize) {
            return reject(
              'Routes collection argument is not a RoutesCollection instance'
            );
        }
        return resolve(routesCollection.serialize(jsonConfiguration));
    });

    /**
     * Generates a complete configuration.
     * @function generateAllCode
     * @param routesConfiguration
     * @param jsonConfiguration
     */
    const generateAllCode = (routesConfiguration, jsonConfiguration) => (
        new Promise((resolve, reject) => (
            generateRoutesConfiguration(
                routesConfiguration,
                jsonConfiguration
            ).then(output => resolve(METEOR_CODE(output))
            ).catch(error => reject(error))
        ))
    );

    return {
        defaultJSONConfiguration,
        generateRoutesConfiguration,
        generateAllCode,
    };
}());

module.exports = configurationGenerator;
