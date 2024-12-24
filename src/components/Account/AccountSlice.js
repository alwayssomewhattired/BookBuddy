import api from "../../store/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: (token) => ({
        url: "/users/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetAccountQuery } = accountApi;