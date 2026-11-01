import { MovieList } from "../components/MovieList";
import { useState } from "react";
import { Pagination } from "../components/Pagiation";

export const Main = () => {
  const [page, setPage] = useState(2);
  const [pagesCount, setPagesCount] = useState(0);
  console.log(pagesCount);

  return (
    <>
      <h1>This is main</h1>
      <MovieList setPagesCount={setPagesCount} page={page} />
      <Pagination setPage={setPage} pagesCount={pagesCount} />
    </>
  );
};
