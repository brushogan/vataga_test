import React from "react";
import CheckboxGroup from "./CheckBoxGroup/CheckBoxGroup";
import { filterOptions } from "../../helpers/constants";
import { FilterContainer } from "./FilterBlockStyles";

const FilterBlock: React.FC = () => {
  return (
    <div>
      {filterOptions.map(({ title, initial }) => (
        <FilterContainer key={title}>
          {title}
          <CheckboxGroup title={title} initial={initial} />
        </FilterContainer>
      ))}
    </div>
  );
};

export default FilterBlock;
