/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { Link, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useReturnsMutation } from "./AccountSlice";
import { useEffect, useState } from "react";

export default function Account() {
  const navigate = useNavigate;
  const token = localStorage.getItem("token");
  const { data: myData, isSuccess, isLoading } = useGetAccountQuery(token);
  const [createReturnsMutation] = useReturnsMutation();
  const [acnt, setAcnt] = useState([]);
  const [bookDet, setBookDet] = useState([]);
  const [bookId, setBookId] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setAcnt([myData]);
      setBookDet(myData.books);
      // setBookId(myData.books[0].id);
    }
  }, [myData]);

  useEffect(() => {
    if (bookId != "hi" && isSuccess) setBookId(myData.books[0].id);
  }, [myData]);

  function returnsBook() {
    createReturnsMutation({ token, bookId });
    if (bookDet.length === 0) {
      setBookId("hi");
    }
  }

  let $details;
  let bookDetails;

  if (!token) {
    $details = <p>Please Register or Login</p>;
  } else if (isLoading) {
    $details = <p>Loading User Information</p>;
  } else {
    console.log(bookDet);
    $details = acnt.map((item) => (
      <li key={item}>
        <h3> firstname: {item.firstname}</h3>
        <h3> lastname: {item.lastname}</h3>
        <h3>Email: {item.email}</h3>
      </li>
    ));
    bookDetails = bookDet.map((ajx) => (
      <li key={ajx}>
        <h3> Books: {ajx.title} </h3>
      </li>
    ));
  }

  if (bookDet.length === 0) {
    bookDetails = <h3>Books: 0</h3>;
  }

  return (
    <ul>
      <h2>Account</h2>
      {$details}
      {bookDetails}
      <div>
        <button onClick={returnsBook}>Return</button>
      </div>
      <Link to="/">Home</Link>
    </ul>
  );
}
