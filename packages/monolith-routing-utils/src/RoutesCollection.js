/**
 * @class Class that defines a collection of routes.
 */
class RoutesCollection {
    /**
     * Create an empty route collection.
     */
    constructor() {
        this.collection = [];
    }

    /**
     * Add a new route to collection.
     * @param routeObject {RouteObject}
     * @returns {RoutesCollection}
     */
    add(routeObject) {
        this.collection.push(routeObject);
        return this;
    }

    /**
     * Returns a route giving an index.
     * @param index {Object}
     * @returns {RouteObject}
     */
    get(index) {
        if (index >= 0 && index < this.size()) {
            return this.collection[index];
        }
        throw new Error('Invalid index argument.');
    }

    /**
     * Removes the route with the give index from the collection.
     * @param index {Object}
     * @returns {RoutesCollection}
     */
    remove(index) {
        if (index >= 0 && index < this.size()) {
            this.collection.splice(index, 1);
        }
        return this;
    }

    /**
     * Clear an return the collection.
     * @returns {RoutesCollection}
     */
    clear() {
        this.collection.splice(0, this.size());
        return this;
    }

    /**
     * Returns size of collection.
     * @returns {number}
     */
    size() {
        return this.collection.length;
    }

    /**
     * Transform route collection in a string.
     * @returns {string}
     */
    serialize() {
        const serializedRoutes = this.collection.map(
          entry => entry.serialize('    ')
        );

        const serializedObject = [
            '{',
        ];
        serializedRoutes.every(
          routeString => serializedObject.push(`${routeString},`)
        );
        serializedObject.push('  }');

        return serializedObject.join('\n');
    }
}

module.exports = RoutesCollection;
