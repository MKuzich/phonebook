import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../types/post';
import { Contacts } from '../types/contacts';
import { IContact } from '../types/contact';
import { RootState } from './store';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query<Contacts, void>({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation<IContact, IPost>({
      query: value => ({
        url: `/contacts`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contact'],
    }),
    removeContact: builder.mutation<IContact, string>({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
