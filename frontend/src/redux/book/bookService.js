import axios from "axios";

const API_URL = "http://localhost:5000/api/books"; 

// Fetch all books
const fetchBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data.data.books;
};

// Fetch a single book by ID
const fetchBookById = async (bookId) => {
  const response = await axios.get(`${API_URL}/${bookId}`);
  return response.data;
};

// Create a new book
const createBook = async (bookData) => {
  const response = await axios.post(API_URL, bookData);
  return response.data;
};

// Update a book
const updateBook = async (bookId, bookData) => {
  const response = await axios.put(`${API_URL}/${bookId}`, bookData);
  return response.data;
};

// Delete a book
const deleteBook = async (bookId) => {
  const response = await axios.delete(`${API_URL}/${bookId}`);
  return response.data;
};

const bookService = {
  fetchBooks,
  fetchBookById,
  createBook,
  updateBook,
  deleteBook,
};

export default bookService;