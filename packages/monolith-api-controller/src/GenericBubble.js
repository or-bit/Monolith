const React = require('react');
const PropTypes = require('prop-types');
const LifeCycle = require('monolith-api-model').LifeCycle;

export default class GenericBubble extends React.Component {
    constructor(props) {
        super(props);
        if (props !== undefined) {
            this.lifeCycle = props.time === null ? null : new LifeCycle(props.time);
        }
        this.state = { alive: true };
    }

    // eslint-disable-next-line class-methods-use-this
    aliveRender() {}

    // eslint-disable-next-line class-methods-use-this
    notAliveRender() {}

    render() {
        if (this.state.alive) {
            return this.aliveRender();
        }
        return this.notAliveRender();
    }
}

GenericBubble.propTypes = {
    time: PropTypes.number,
};

GenericBubble.defaultProps = {
    time: null,
};
