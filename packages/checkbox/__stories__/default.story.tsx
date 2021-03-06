import React, { useState, useCallback } from 'react';
import Checkbox from '@rhight/checkbox';

export const Default = () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback((newValue: boolean) => {
    setChecked(!newValue);
  }, []);

  return (
    <div style={{ margin: '10px' }}>
      <Checkbox
        checked={checked}
        onChange={onChange}
        label="1 страница"
      />
    </div>
  );
};
