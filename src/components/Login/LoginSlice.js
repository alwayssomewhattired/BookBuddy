import api from "../../store/api";

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: ({ firstname, lastname, email, password }) => ({
        url: "/users/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useAddLoginMutation } = loginApi;
