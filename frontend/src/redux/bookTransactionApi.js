import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookTransactionApi = createApi({
  reducerPath: "booksTransactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/books/transaction/",
  }),
  endpoints: (builder) => ({
    issueBook: builder.mutation({
      query: (data) => ({
        url: "issue",
        method: "POST",
        body: data, // Contains student ID and book ID
      }),
    }),

    returnBook: builder.mutation({
      query: (data) => ({
        url: "return",
        method: "POST",
        body: data, // Contains student ID and book ID
      }),
    }),

    getActiveTransactions: builder.query({
      query: () => "active", // Gets active book transactions
    }),
    getStudentTransactions: builder.query({
      query: (studentId) => `student/${studentId}`, // Gets transactions for a specific student
    }),
    getTransactionById: builder.query({
      query: (transactionId) => `${transactionId}`, // Gets transaction by ID
    }),
  }),
});

export const {
  useIssueBookMutation,
  useReturnBookMutation,
  useGetActiveTransactionsQuery,
  useGetStudentTransactionsQuery,
  useGetTransactionByIdQuery,
} = bookTransactionApi;
