import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle
} from 'reactstrap';

const GraveStone = ({ firstName, lastName }) => {
  <div>
    <Card className='gravestone'>
      <CardBody>
      <CardTitle>{firstName} {lastName}</CardTitle>
      </CardBody>
    </Card>
  </div>;
};

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;
