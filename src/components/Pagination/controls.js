import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Button from "../Button";
import Select from "../Select";
import Option from "../Option";

const StyledControls = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  > .page-display {
    display: flex;
    align-items: center;
    
    > section {
      margin-right: 10px;
    }
  }

  > button {
    margin: 0 10px;
    color: blue;
    background: transparent;
    cursor: pointer
    outline: none;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

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
        <Option value={i} key={i}>
          {i + 1}
        </Option>
      );
    }

    return options;
  }

  // don't need pagination controls when there's one or zero pages
  if (totalPages <= 1) return null;

  return (
    <StyledControls>
      <Button disabled={currPage === 0} onClick={e => pageChange(null, -1)}>
        <i className="fas fa-chevron-left"></i>
      </Button>

      <div className="page-display">
        <Select
          name="currPage"
          id="currPage"
          onChange={e => pageChange(e.currentTarget.value)}
          value={currPage}
        >
          {getOptions()}
        </Select>
        <div>of {totalPages}</div>
      </div>

      <Button
        disabled={currPage === totalPages - 1}
        onClick={e => pageChange(null, 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </Button>
    </StyledControls>
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
