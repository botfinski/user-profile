import React from "react";
import PropTypes from "prop-types";
import "./CommentInput.scss";

const commentInput = props => (
  <div className="Comment-Input-Container">
    <form onSubmit={props.addComment}>
      <input className="Comment-Input" placeholder="Add a comment" onChange={props.inputChanged} ref={props.inputRef} />
    </form>
  </div>
);

commentInput.propTypes = {
  addComment: PropTypes.func,
  inputChanged: PropTypes.func,
  inputValue: PropTypes.string,
  inputRef: PropTypes.func
};

export default commentInput;
