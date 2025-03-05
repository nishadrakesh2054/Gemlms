import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "students",
    }),
    getSingleStudent: builder.query({
      query: (id) => `students/${id}`,
    }),
    addStudent: builder.mutation({
      query: (student) => ({
        url: "students",
        method: "POST",
        body: student,
      }),
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...student }) => ({
        url: `students/${id}`,
        method: "PUT",
        body: student,
      }),
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
    }),
    importXlStudent: builder.mutation({
      query: (formData) => ({
        url: "students/import",
        method: "POST",
        body: formData,
      }),
    }),
    exportXlStudent: builder.query({
      query: () => "students/export",
      transformResponse: async (response) => {
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      },
    }),
  }),
});

export const {
    useGetStudentsQuery,
    useGetSingleStudentQuery,
    useAddStudentMutation,
    useUpdateStudentMutation,
    useDeleteStudentMutation,
    useImportXlStudentMutation,
    useExportXlStudentQuery,
} = studentsApi;
