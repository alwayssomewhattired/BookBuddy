import { useState } from "react";

import { Provider } from "react-redux";
import bookLogo from "./assets/books.png";
import { store } from "./store/store";

import Books from "./components/Books/Books";

function App() {
  const [token, setToken] = useState(null);

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
      <Books />
    </Provider>
  );
}

export default App;
