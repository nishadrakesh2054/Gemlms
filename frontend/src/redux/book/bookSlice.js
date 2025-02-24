import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";

// Initial state
const initialState = {
  books: [],
  book: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Fetch all books
export const getBooks = createAsyncThunk(
  "books/getAll",
  async (_, thunkAPI) => {
    try {
        const response = await bookService.fetchBooks();
        return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Fetch a single book by ID
export const getBookById = createAsyncThunk(
  "books/getById",
  async (bookId, thunkAPI) => {
    try {
      return await bookService.fetchBookById(bookId);
    } catch (error) {
      const message =
        (error.response &&
            
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create a new book
export const createBook = createAsyncThunk(
  "books/create",
  async (bookData, thunkAPI) => {
    try {
      return await bookService.createBook(bookData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update a book
export const updateBook = createAsyncThunk(
  "books/update",
  async ({ bookId, bookData }, thunkAPI) => {
    try {
      return await bookService.updateBook(bookId, bookData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a book
export const deleteBook = createAsyncThunk(
  "books/delete",
  async (bookId, thunkAPI) => {
    try {
      return await bookService.deleteBook(bookId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Book slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all books
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })




      // Fetch a single book by ID
      .addCase(getBookById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload;
      })
      .addCase(getBookById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })




      // Create a new book
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })




      // Update a book
      .addCase(updateBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        );
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })


      
      // Delete a book
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
