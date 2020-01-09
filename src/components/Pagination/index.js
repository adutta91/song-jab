import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { chunk } from "lodash";

import Controls from "./controls";

class WithPagination extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.options !== prevProps.options) {
      this.setState(this.initialState(this.props));
    }
  }

  initialState = props => {
    const pages = this.getPages(props);

    return {
      pages,
      displayItems: pages[0] || [],
      currPage: 0
    };
  };

  getPages = ({ options, pageSize }) => {
    return chunk(options, pageSize);
  };

  pageChange = newPage => {
    this.setState(prev => ({
      currPage: newPage,
      displayItems: prev.pages[newPage]
    }));
  };

  controls = () => {
    if (!this.state.pages.length) {
      return null;
    }

    return (
      <Controls
        currPage={this.state.currPage}
        totalPages={this.state.pages.length}
        onChange={this.pageChange}
      />
    );
  };

  render = () => (
    <Fragment>
      {this.props.controlsPos === "top" ? this.controls() : null}

      {this.props.children({
        displayItems: this.state.displayItems
      })}
      {this.props.controlsPos === "bottom" ? this.controls() : null}
    </Fragment>
  );
}

WithPagination.propTypes = {
  options: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
  controlsPos: PropTypes.oneOf(["top", "bottom"])
};

WithPagination.defaultProps = {
  controlsPos: "bottom",
  pageSize: 20
};

export default WithPagination;
