const React = require('react');
const PropTypes = require('prop-types');
const consts = require('monolith-consts');
const io = require('socket.io-client');

class GenericBubble extends React.Component {
    constructor(props) {
        super(props);
        this.handleLifeCycle();
        this.state = { alive: true };
    }

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
    url: PropTypes.string,
};

GenericBubble.defaultProps = {
    time: null,
    url: null,
};

module.exports = GenericBubble;
