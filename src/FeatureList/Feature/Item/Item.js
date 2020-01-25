import React, { Component } from 'react';
import slugify from 'slugify';

class Item extends Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.name)}
                    checked={this.props.selected}
                    onChange={() => this.props.onSelect(this.props.item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
                </label>
            </div>
        )
    }
}

Item.defaultProps = {
    item: [],
    onSelect: () => {}
};

export default Item;