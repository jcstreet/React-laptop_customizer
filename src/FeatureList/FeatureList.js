import React, { Component } from 'react';
import Feature from './Feature/Feature';


class FeatureList extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return (
        <Feature 
          title={feature}
          key={idx} 
          feature={this.props.features[feature]} 
          featureHash={feature + '-' + idx}
          currency={this.props.currency}
          selection={this.props.selections[feature]} 
          onSelectItem={(feature,item) => this.props.onFeatureChange(feature,item)} />
      )
    });

    return (
      <>
        {features}
      </>
    )
  }
}

export default FeatureList;