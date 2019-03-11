import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
  name,
  label,
  type,
  placeholder,
  classname,
  icon
}) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className={icon} />
        </span>
        <input
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          className={classname}
          icon={icon}
        />
      </div>
    </div>
  );
};

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  classname: PropTypes.string.isRequired
};
TextInputField.defaultProps = {
  label: '',
  placeholder: '',
  icon: ''
};

export default TextInputField;
