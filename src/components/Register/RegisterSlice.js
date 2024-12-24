import api from "../../store/api";

const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: ({ firstname, lastname, email, password }) => ({
        url: "/users/register",
        method: "POST",
        body: { firstname, lastname, email, password },
      }),
    }),
  }),
});

export const { useAddUserMutation } = registerApi;
