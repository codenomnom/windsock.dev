'use client';

import { useState } from 'react';
import { Switch } from '@nextui-org/react';
import { IconifyIconBaselinePaid, IconifyIconBaselineMoneyOff } from '../icons';

export function Filter({ }) {
  const [paid, setPaid] = useState(true);

  return (
    <div className="filter flex items-center">
      free only
      <Switch
        defaultSelected
        size="md"
        color="primary"
        className="ml-2"
        isSelected={paid}
        onValueChange={setPaid}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <IconifyIconBaselinePaid className={className} />
          ) : (
            <IconifyIconBaselineMoneyOff className={className} />
          )
        }
      >
        {/* { paid ? 'include paid' : 'free only' } */}
      </Switch>
      include paid
    </div>
  );
}