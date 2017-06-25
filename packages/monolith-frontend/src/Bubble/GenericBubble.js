const React = require('react');
const PropTypes = require('prop-types');
const consts = require('monolith-consts');
const io = require('socket.io-client');

/**
 * @class Defines an empty generic bubble.
 * @extends React.Component
 * @property props {Object} Properties of the component
 * @property props.url {string} URL needed to reach the bubble
 * @property props.time {int} Bubble's lifetime in seconds
 */
class GenericBubble extends React.Component {

    /**
     * Create an empty bubble, define the life cycle and set the bubble's state on active.
     * @param props - properties of the component
     */
    constructor(props) {
        super(props);
        this.handleLifeCycle();
        this.state = { alive: true };
    }

    /**
     * Manage the bubble's life cycle.
     */
    handleLifeCycle() {
        if (this.props.url) {
            const { url, time } = this.props;
            const socket = io.connect(`${url}/${consts.BUBBLE_ROOM}`);
            socket.on('connect', () => {
                socket.emit(consts.LIFECYCLE_EVENT, time);

                socket.on(consts.LIFECYCLE_EVENT_DONE, () => {
                    this.setState({ alive: false });
                });

                socket.on(
                    consts.LIFECYCLE_EVENT_FAILED,
                    error => console.error(error)
                );
            });
        }
    }

    /**
     * Specifies what to render when the bubble is alive.
     * @abstract
     * @returns {React.Component}
     */
    // eslint-disable-next-line class-methods-use-this
    aliveRender() {}

    /**
     * Specifies what to render when the bubbe is not alive.
     * @abstract
     * @returns {React.Component}
     */
    // eslint-disable-next-line class-methods-use-this
    notAliveRender() {}

    /**
     * Renders bubble
     * @returns {React.Component}
     */
    render() {
        if (this.state.alive) {
            return this.aliveRender();
        }
        return this.notAliveRender();
    }
}

GenericBubble.propTypes = {
    time: PropTypes.number,
    url: PropTypes.string,
};

GenericBubble.defaultProps = {
    time: null,
    url: null,
};

module.exports = GenericBubble;
