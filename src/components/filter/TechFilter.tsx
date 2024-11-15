import { Key } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from '@nextui-org/react';

import { techList } from '@/content/content-config';
import { useFilterContext } from "@/context/FilterContext";

export function TechFilter() {
  const { techFilter, setTechFilter } = useFilterContext();

  function onAction(key: Key) {
    const id = key as string;
    let newSelection = new Set(techFilter);

    if (id === 'any') {
      // if (selectedKeys.size === 0) { // list is empty, so select all
      //   newSelection = new Set(techList.map((tech) => tech.id));
      // } else { // list is not empty, so deselect all
      //   newSelection = new Set([]);
      // }
      newSelection = new Set(techList.map((tech) => tech.id));
    } else {
      if (techFilter.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
    }
    setTechFilter(newSelection);
  }

  return (
    <Dropdown className="filter-tech">
      <DropdownTrigger>
        <Button
          size="lg"
          variant="flat"
          disableRipple={true}
        >
          tech:&nbsp;
          {
            techList.map((tech) => {
              if (tech.icon) {
                return (
                  <tech.icon key={`tech-icon-${tech.id}`}
                             className={'transition-all ' + (techFilter.has(tech.id) ? '' : 'opacity-30 mt-2')}
                  />);
              }
              return null;
            })
          }
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        variant="flat"
        closeOnSelect={false}
        selectionMode="multiple"
        disallowEmptySelection={true}
        selectedKeys={techFilter as never}
        onAction={onAction}
      >
        <DropdownSection showDivider={true} aria-label="(de)select all tech">
          <DropdownItem key="any">
            select all tech
            {/*{selectedKeys.size ? '- clear tech list' : '- select all tech'}*/}
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="tech list">
          {techList.map((tech) => (
            <DropdownItem
              key={tech.id}
              startContent={tech.icon ? <tech.icon/> : ''}
            >
              {tech.name}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
