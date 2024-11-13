'use client';

import { Switch } from '@nextui-org/react';
import { useFilterContext } from '@/context/FilterContext';
import { IconifyIconBaselinePaid, IconifyIconBaselineMoneyOff } from '../icons';

export function Filter({ }) {
  const { includePaid, setIncludePaid } = useFilterContext();

  return (
    <div className="filter flex items-center">
      free only
      <Switch
        defaultSelected
        size="md"
        color="primary"
        className="ml-2"
        isSelected={includePaid}
        onValueChange={setIncludePaid}
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