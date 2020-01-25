import React, { Component } from 'react';
import Item from './Item/Item';

class Feature extends Component {
    render() {

        const options = this.props.feature.map((item, i) => {
            return (
                <Item item={item}
                    key={i}
                    name={this.props.title} 
                    currency={this.props.currency} 
                    selected={item.name === this.props.selection.name} 
                    onSelect={name => this.props.onSelectItem(this.props.title, name)} />
            );
          });

        return (
            <fieldset className="feature" key={this.props.featureHash}>
              <legend className="feature__name">
                <h3>{this.props.title}</h3>
              </legend>
              {options}
            </fieldset>
          );
    }
}

export default Feature;