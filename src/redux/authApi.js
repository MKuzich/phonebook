import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authfetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `/users/current`,
      providesTags: ['Auth'],
    }),
    signUp: builder.mutation({
      query: value => ({
        url: `/users/signup`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logIn: builder.mutation({
      query: value => ({
        url: `/users/login`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
        body: '',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
} = authApi;
