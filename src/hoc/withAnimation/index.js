import React, { Component } from 'react';

const withAnimation = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent />;
    }
  };
};

export default withAnimation;
