/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useState, useEffect } from "react";
import { useGetBooksQuery } from "../Books/BooksSlice";
import { useCheckOutMutation } from "./SingleBookSlice";
import { useNavigate } from "react-router-dom";

export default function SingleBook({ bookId }) {
  const token = localStorage.getItem("token");

  const { data: myData, isLoading } = useGetBooksQuery();
  const [createCheckOutMutation, { data: thatData, error }] =
    useCheckOutMutation();
  const navigate = useNavigate();

  function singleBook() {
    if (myData != undefined) {
      let newData = myData.books;
      let book = newData.find((item) => item.id === bookId);
      return book;
    }
  }

  const checkoutBook = async () => {
    try {
      const response = await createCheckOutMutation({ token, bookId });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  let $details;

  // function checkoutBook() {
  //     createCheckOutMutation({ token, bookId });
  //     console.log(thatData);
  // }

  let book = singleBook();

  if (!bookId) {
    $details = <p>Please select a book for more details.</p>;
  } else if (isLoading) {
    $details = <p>Loading book information</p>;
  } else {
    $details = (
      <>
        <h3>
          {book.title} #{book.id}
        </h3>
        <figure>
          <img src={book.coverimage} alt="" />
        </figure>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </>
    );

    return (
      <aside>
        <h2>Selected Book</h2>
        {$details};<button onClick={() => navigate("/")}>Home</button>
        <button onClick={checkoutBook}>CheckOut</button>
        {error && <output>Need Account to Checkout{error.message}</output>}
      </aside>
    );
  }
}
