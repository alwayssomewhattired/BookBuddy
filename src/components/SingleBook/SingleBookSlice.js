import api from "../../store/api";

const singleBookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    checkOut: builder.mutation({
      query: ({ token, bookId }) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          available: false,
        }),
      }),
    }),
  }),
});

export const { useCheckOutMutation } = singleBookApi;
