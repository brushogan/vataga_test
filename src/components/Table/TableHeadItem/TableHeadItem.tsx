import React, { useContext } from "react";
import { ThItem, SortBlock } from "./TableHeadItemStyles";
import { headRow } from "../../../helpers/constants";
import { DataContext } from "../../../App";
import { DataItem } from "../../../helpers/types";

type Props = {
  title: string;
};

const TableHeadItem: React.FC<Props> = ({ title }) => {
  const { setData, setCurrentPage } = useContext(DataContext);
  const param: keyof DataItem = headRow[title];

  const sorter = (direction: string) => {
    setData((prev: DataItem[]) => [
      ...prev.sort((a: DataItem, b: DataItem) => {
        const first = direction === "desc" ? a[param] : b[param];
        const second = direction === "desc" ? b[param] : a[param];
        if (typeof first === "boolean") {
          return first === second ? 0 : first ? -1 : 1;
        } else return String(second).localeCompare(first);
      }),
    ]);
    setCurrentPage(1);
  };

  return (
    <ThItem>
      {title}
      <SortBlock>
        <img onClick={() => sorter("desc")} src="desc.svg" alt="desc" />
        <img onClick={() => sorter("asc")} src="asc.svg" alt="asc" />
      </SortBlock>
    </ThItem>
  );
};

export default TableHeadItem;
