import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';

const LiveStudent = ({ firstName, lastName }) => (
  <div>
    <Card className='student-card'>
      <CardTitle>{firstName} {lastName}</CardTitle>
    </Card>
  </div>
);

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
