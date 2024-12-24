/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { Link, useNavigate } from "react-router-dom";
import { useGetAccountQuery } from "./AccountSlice";
import { useEffect, useState } from "react";

export default function Account() {
  const navigate = useNavigate;
  console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  const { data: myData, isSuccess, isLoading } = useGetAccountQuery(token);
  const [acnt, setAcnt] = useState([]);
  const [bookDet, setBookDet] = useState([]);

  useEffect(() => {
    console.log(`is this a success ${isSuccess}`);
    if (isSuccess) {
      setAcnt([myData]);
      setBookDet(myData.books);
      console.log(bookDet);
    }
  }, [myData]);

  // let newData = [];

  // newData.push(myData);

  // console.log(newData);

  let $details;
  let bookDetails;

  if (!token) {
    $details = <p>Please Register or Login</p>;
  } else if (isLoading) {
    $details = <p>Loading User Information</p>;
  } else {
    console.log(acnt);
    $details = acnt.map((item) => (
      <li key={item}>
        <h3> firstname: {item.firstname}</h3>
        <h3> lastname: {item.lastname}</h3>
        <h3>Email: {item.email}</h3>
        {/* <h3>books: {item.books}</h3> */}
      </li>
    ));
    bookDetails = bookDet.map((ajx) => (
      <li key={ajx}>
        <h3> books: {ajx.title} </h3>
      </li>
    ));
  }

  return (
    <ul>
      <h2>Account</h2>
      {$details}
      {bookDetails}
      <Link to="/">Home</Link>
    </ul>
  );
}
