import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'reactstrap';

const LiveStudent = ({ firstName, lastName }) => (
  <div>
    <Card className='student-card'>
      <CardBody>
      <CardTitle tag="h4" className="mt-2 mb-2 text-muted">{firstName} {lastName}</CardTitle>
      </CardBody>
    </Card>
  </div>
);

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
