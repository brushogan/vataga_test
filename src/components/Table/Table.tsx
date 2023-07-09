import React, { useContext } from "react";
import { TableBlock, TableRow, TableHeadRow, Td } from "./TableStyles";
import { headRow } from "../../helpers/constants";
import TableHeadItem from "./TableHeadItem/TableHeadItem";
import { DataContext } from "../../App";
import { DataItem } from "../../helpers/types";

const Table: React.FC = () => {
  const { viewData } = useContext(DataContext);

  return (
    <TableBlock>
      <thead>
        <TableHeadRow>
          {Object.keys(headRow).map((headItem) => (
            <TableHeadItem key={headItem} title={headItem} />
          ))}
        </TableHeadRow>
      </thead>
      <tbody>
        {viewData.map((apiInfo: DataItem) => (
          <TableRow key={apiInfo.Link}>
            <Td style={{ fontWeight: "600" }}>{apiInfo.API}</Td>
            <Td>{apiInfo.Category}</Td>
            <Td>
              <img src={`${apiInfo.HTTPS}.svg`} alt="https" />
            </Td>
            <Td>
              <img
                src={apiInfo.Cors === "yes" ? "true.svg" : "false.svg"}
                alt="cors"
              />
            </Td>
            <Td>{apiInfo.Description}</Td>
          </TableRow>
        ))}
      </tbody>
    </TableBlock>
  );
};

export default Table;
