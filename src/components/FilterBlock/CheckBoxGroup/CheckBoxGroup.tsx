import React, { ChangeEvent, useState, useContext } from "react";
import { DataContext } from "../../../App";
import { DataItem, filterInitial } from "../../../helpers/types";
import { headRow } from "../../../helpers/constants";
import getEntries from "../../../api/tableApi";
import { CheckBoxGroupContainer } from "./CheckBoxGroupStyles";

type Props = {
  title: string;
  initial: filterInitial;
};

const CheckboxGroup: React.FC<Props> = ({ title, initial }) => {
  const { setData, setCurrentPage } = useContext(DataContext);
  const [checkboxes, setCheckboxes] = useState(initial);
  const param = headRow[title];

  const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const newCheckboxes: Record<string, boolean> = {};
    for (const key in checkboxes) {
      newCheckboxes[key] = key === name ? checked : false;
    }

    setCheckboxes(newCheckboxes);

    await getEntries().then((data: any) => {
      if (param === "HTTPS")
        setData(
          data.entries.filter((el: DataItem) => {
            if (checked) return name === "true" ? el[param] : !el[param];
            else return el;
          })
        );
      else {
        setData(
          data.entries.filter((el: DataItem) =>
            checked ? el[param] === name : el
          )
        );
      }
    });
    setCurrentPage(1);
  };

  return (
    <CheckBoxGroupContainer>
      {Object.entries(checkboxes).map(([name, checked]) => (
        <label key={name}>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleCheckboxChange}
          />
          {name}
        </label>
      ))}
    </CheckBoxGroupContainer>
  );
};

export default CheckboxGroup;
