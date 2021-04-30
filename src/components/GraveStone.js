import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle
} from 'reactstrap';

const GraveStone = ({ firstName, lastName }) => (
  <div>
    <Card className='gravestone'>
      <CardBody>
      <CardTitle tag="h4" className="mt-2 mb-2 text-muted">{firstName} {lastName}</CardTitle>
      </CardBody>
    </Card>
  </div>
);

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;
