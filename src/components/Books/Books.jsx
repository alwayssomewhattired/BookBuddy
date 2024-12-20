/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useGetBooksQuery } from "./BooksSlice";
import { useEffect, useState } from "react";

export default function Books() {
  const { data, isSuccess, isLoading } = useGetBooksQuery();

  console.log(data);

  const books = data.books;

  return (
    <ul>
      {books.map((b) => (
        <li key={b.id}>
          <h3>
            {b.title} by {b.author}
          </h3>
          <figure>
            <img src={b.coverimage} alt="b.name" />
          </figure>
        </li>
      ))}
    </ul>
  );
}
