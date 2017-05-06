import React from 'react';
import CheckButtonGroup from '../GUI/CheckButton/CheckBoxGroup';

export default class ListItem extends React.Component {

    constructor(props) { // passing props
        super(props);
        this.state = {
            item: this.props.item,
        };
    }

    render() {
        return (
            <div>
                <CheckButtonGroup
                  groupName="lista" buttons={[
                      {
                          name: this.props.item,
                          value: this.props.item,
                          label: this.props.item,
                          checked: false,
                      },
                  ]}
                />
            </div>
        );
    }
}
