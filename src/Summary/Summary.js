import React, { Component } from 'react';

class Summary extends Component {
    render() {

        const summary = Object.keys(this.props.selections).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selections[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.props.currency.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });

        const total = Object.keys(this.props.selections).reduce(
            (acc, curr) => acc + this.props.selections[curr].cost,
            0
        );

        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.props.currency.format(total)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Summary;