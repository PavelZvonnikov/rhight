import React from 'react';
import Tabs from '@rhight/tabs';

const list = [
  {
    label: 'Moscow',
    value: 1,
  },
  {
    label: 'London',
    value: 2,
  },
  {
    label: 'New York',
    value: 3,
  },
];

export const DisabledAll = () => {
  const [value, changeValue] = React.useState(1);
  const onChange = (item) => changeValue(item.value);

  return (
    <div style={{ margin: '10px' }}>
      <Tabs
        isDisabled
        name="test"
        list={list}
        value={value}
        onChange={onChange}
        size="small"
      />
    </div>
  );
};
