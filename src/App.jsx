import { useState } from "react";

import { Provider } from "react-redux";
import bookLogo from "./assets/books.png";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./components/Books/Books";
import SingleBook from "./components/SingleBook/SingleBook";
import Login from "./components/Login";
import Register from "./components/Register/Register";
import Account from "./components/Account/Account";

function App() {
  const [token, setToken] = useState(null);
  const [bookId, setBookId] = useState();

  return (
    <Provider store={store}>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      {/* <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books setBookId={setBookId} />} />
          <Route
            path="/book"
            element={<SingleBook bookId={bookId} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register token={token} setToken={setToken} />}
          />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
