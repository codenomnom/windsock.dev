'use client';

import { Switch } from '@nextui-org/react';
import { useFilterContext } from '@/context/FilterContext';
import { IconifyIconBaselinePaid, IconifyIconBaselineMoneyOff } from '../icons';
import { TechFilter } from "@/components/filter/TechFilter";

export function Filter({}) {
  const { includePaid, setIncludePaid } = useFilterContext();

  return (
    <div className="filter w-full flex items-center justify-evenly">
      <div className="filter-paid">
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
              <IconifyIconBaselinePaid className={className}/>
            ) : (
              <IconifyIconBaselineMoneyOff className={className}/>
            )
          }
        >
          {/* { paid ? 'include paid' : 'free only' } */}
        </Switch>
        include paid
      </div>

      <TechFilter/>
    </div>
  );
}
