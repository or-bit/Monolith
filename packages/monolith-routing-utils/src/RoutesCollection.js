class RoutesCollection {
    constructor() {
        this.collection = [];
    }

    add(routeObject) {
        this.collection.push(routeObject);
        return this;
    }

    get(index) {
        if (index >= 0 && index < this.size()) {
            return this.collection[index];
        }
        throw new Error('Invalid index argument.');
    }

    remove(index) {
        if (index >= 0 && index < this.size()) {
            this.collection.splice(index, 1);
        }
        return this;
    }

    clear() {
        this.collection.splice(0, this.size());
        return this;
    }

    size() {
        return this.collection.length;
    }

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
