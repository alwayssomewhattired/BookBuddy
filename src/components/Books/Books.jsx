/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useGetBooksQuery } from "./BooksSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Books({ setBookId }) {
  const { data: myData, isSuccess, isLoading } = useGetBooksQuery();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  let newData = [];

  useEffect(() => {
    console.log(`is this a success ${isSuccess}`);
    if (isSuccess) {
      setBooks(myData.books);
      console.log(books);
      const newData = myData.title;
    }
  }, [myData]);

  return (
    <ul>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <Link to="/account">Account</Link>
      <div>
        <form>
          <input
            type="text"
            placeholder="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      {books
        .filter((item) => {
          return name.toLowerCase() == ""
            ? item
            : item.title.toLowerCase().includes(name);
        })
        .map((b) => (
          <li key={b.id}>
            <h3>
              {b.title} by {b.author}
            </h3>
            <figure>
              <img src={b.coverimage} alt="b.name" />
            </figure>
            <button
              onClick={() => {
                setBookId(b.id);
                navigate("/book");
              }}
            >
              Select
            </button>
          </li>
        ))}
    </ul>
  );
}
