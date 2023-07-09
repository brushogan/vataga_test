import React, { useContext, useEffect, useState } from "react";
import { pageSize, paginationRowSize } from "../../helpers/constants";
import { PagIcon, PagNumber, PaginationContainer } from "./PaginationStyles";
import { DataContext } from "../../App";

const Pagination: React.FC = () => {
  const { setCurrentPage, count, currentPage } = useContext(DataContext);
  const [viewNums, setViewNums] = useState<number[]>(
    Array.from(Array(paginationRowSize).keys()).map((i) => i + 1)
  );
  const pagesCount = Math.ceil(count / pageSize);
  const numbersArray = Array.from(Array(pagesCount).keys()).map((i) => i + 1);

  useEffect(() => {
    if (!viewNums.includes(currentPage)) {
      setViewNums(
        currentPage > paginationRowSize
          ? numbersArray.slice(currentPage - paginationRowSize, currentPage)
          : numbersArray.slice(0, paginationRowSize)
      );
    }
  }, [currentPage, numbersArray, viewNums]);

  return (
    <PaginationContainer>
      <PagIcon onClick={() => setCurrentPage(1)} src="start.svg" alt="start" />
      <PagIcon
        onClick={() =>
          setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : prev))
        }
        src="decrease.svg"
        alt="decrease"
      />

      {viewNums.map((num: number) => (
        <PagNumber
          style={num === currentPage ? { background: "#44486D12" } : {}}
          key={num}
          onClick={() => setCurrentPage(num)}
        >
          {num}
        </PagNumber>
      ))}
      <PagIcon
        onClick={() =>
          setCurrentPage((prev: number) =>
            prev < pagesCount ? prev + 1 : prev
          )
        }
        src="increase.svg"
        alt="increase"
      />
      <PagIcon
        onClick={() => setCurrentPage(pagesCount)}
        src="end.svg"
        alt="end"
      />
    </PaginationContainer>
  );
};

export default Pagination;
