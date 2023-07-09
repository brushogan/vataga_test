import React, { createContext, useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import { pageSize } from "./helpers/constants";
import { Context } from "vm";
import getEntries from "./api/tableApi";
import Error from "./components/Condition/Error/Error";
import Loader from "./components/Condition/Loader/Loader";

export const DataContext = createContext<Context>({});

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    getEntries()
      .then((data: any) => {
        console.log(data);
        setData(data.entries);
        setCount(data.count);
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = currentPage * pageSize;
    setViewData(data.slice(start, end));
  }, [currentPage, data]);

  if (error) return <Error errorMessage={error} />;
  if (!data.length) return <Loader />;
  else
    return (
      <DataContext.Provider
        value={{ data, count, currentPage, viewData, setCurrentPage, setData }}
      >
        <div className="container">
          <Table />
          <Pagination />
        </div>
      </DataContext.Provider>
    );
};

export default App;
