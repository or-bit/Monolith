import React, { Component } from 'react';
import ListItem from './listItem';
import Button from '../GUI/Button/Button';
import ItemsStore from './../../model/itemsStore/ItemsStore';
import * as ListItemsActions from '../../../actions/listItemsActions'; // objectliteral

export default class ListItemContainer extends Component {
    constructor() {
        super();
        this.state = {
            items: ItemsStore.getItems(),
            completed: ItemsStore.getCompleted(),
        };
    }
    processInput() {
        let x = 1; let y = 0;
        return this.state.items.map(
		({ item }) =>
    <div id={this.state.completed[y++].complete}>
        <p hidden id="overallId">{x++}</p>
        <ListItem
          item={item}
        />
    </div>,
		);
    }

    componentWillMount() {
        ItemsStore.on('change', () => {
            this.setState({
                items: ItemsStore.getItems(),
            });
        });
    }

    handleComplete(event) {
		// let number = document.getElementById('overallId').value;
        event.preventDefault();// prevent page refresh

        const inputs = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type.toLowerCase() === 'checkbox')			{
                const isChecked = inputs[i].checked;
                if (isChecked === true)				{
                    const id = inputs[i].parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML;
                    ListItemsActions.completeItem(id);
                }
            }
        }
    }

    handleSubmit(event) {
        const itemString = document.getElementById('todoInpuId').value;
        event.preventDefault();// prevent page refresh
        ListItemsActions.addItem(itemString);
    }

    handleRemove(event) {
		// let number = document.getElementById('overallId').value;
        event.preventDefault();// prevent page refresh

        const inputs = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type.toLowerCase() === 'checkbox')			{
                const isChecked = inputs[i].checked;
                if (isChecked === true)				{
                    const id = inputs[i].parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML;
                    ListItemsActions.removeItem(id);
                }
            }
        }
    }

    render() {
        const items = this.processInput();
        return (
            <div>
                <form name="submitItemForm" onSubmit={this.handleSubmit}>
                    <input id="todoInpuId" /><input type="submit" name="itemText" />
                </form>
                <form name="submitIdsForm" onSubmit={this.handleRemove}>
                    {items}
                    <input type="submit" name="submitIds" value="Rimuovi selezionati" />
                </form>
                <Button function={this.handleComplete} text="Completa Selezionati" />
            </div>
        );
    }
}
