import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({ name, number }) => {
  return (
    <div>
      {name}:{number}
    </div>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
