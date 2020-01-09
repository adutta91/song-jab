import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "../Button";

const Controls = ({ classNames, currPage, totalPages, onChange }) => {
  function pageChange(page, delta) {
    if (page) {
      return onChange(parseInt(page));
    } else if (delta) {
      let newPage = currPage + delta;

      if (newPage >= 0 && newPage < totalPages) {
        return onChange(newPage);
      }
    }
  }

  function getOptions() {
    let options = [];

    for (let i = 0; i < totalPages; i++) {
      options.push(
        <option value={i} key={i}>
          {i + 1}
        </option>
      );
    }

    return options;
  }

  // don't need pagination controls when there's one or zero pages
  if (totalPages <= 1) return null;

  return (
    <div className={classnames(classNames)}>
      <Button disabled={currPage === 0} onClick={e => pageChange(null, -1)}>
        <i className="fas fa-chevron-left"></i>
      </Button>

      <div className="page-display">
        <select
          name="currPage"
          id="currPage"
          onChange={e => pageChange(e.currentTarget.value)}
          value={currPage}
        >
          {getOptions()}
        </select>
        <div>of {totalPages}</div>
      </div>

      <Button
        disabled={currPage === totalPages - 1}
        onClick={e => pageChange(null, 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </Button>
    </div>
  );
};

Controls.propTypes = {
  currPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
};

export default Controls;
