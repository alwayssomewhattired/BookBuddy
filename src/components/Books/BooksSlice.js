import api from "../../store/api";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
