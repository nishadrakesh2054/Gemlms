import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({

    getBooks: builder.query({
      query: () => "books",
    }),


    getSingleBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "books",
        method: "POST",
        body: book,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: book,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
    // Import and export books to/from Excel file
    importXlBook: builder.mutation({
      query: (formData) => ({
        url: "books/import",
        method: "POST",
        body: formData,
      }),
    }),
    exportXlBook: builder.query({
      query: () => "books/export",
      transformResponse: async (response) => {
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      },
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useImportXlBookMutation,
  useExportXlBookQuery,
} = booksApi;
