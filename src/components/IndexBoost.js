import React from 'react';
import { fieldIndexBoost, scoreIndexBoost } from 'sajari';

import Base from './Base.js';
import Components from '../constants/Components.js';

const IndexBoost = props => {
  const { data, namespace, ...others } = props;
  return (
    <Base
      {...others}
      runDefault='all'
      componentName={Components.INDEX_BOOST}
      data={data}
      namespace={namespace}
    />
  );
};

IndexBoost.propTypes = {
  data: React.PropTypes.object.isRequired,
  namespace: React.PropTypes.string,
};

const FieldBoost = props => {
  const { field, value, namespace, ...others } = props;
  return (
    <IndexBoost
      {...others}
      data={fieldIndexBoost(field, value)}
      namespace={namespace}
    />
  );
};

FieldBoost.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired,
  namespace: React.PropTypes.string,
};

const ScoreBoost = props => {
  const { threshold, namespace, ...others } = props;
  return (
    <IndexBoost
      {...others}
      data={scoreIndexBoost(threshold)}
      namespace={namespace}
    />
  );
};

ScoreBoost.propTypes = {
  threshold: React.PropTypes.number.isRequired,
  namespace: React.PropTypes.string,
};

export { FieldBoost, ScoreBoost };
