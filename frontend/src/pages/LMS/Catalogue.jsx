import React, { useEffect } from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../../redux/book/bookSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Catalogue = () => {
  const dispatch = useDispatch();
  
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // Handle delete book
  const handleDelete = async (id) => {
    dispatch(deleteBook(id)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Book deleted successfully!");
      } else {
        toast.error("Failed to delete book!");
      }
    });
  };

  // Initialize DataTable
  useEffect(() => {
    const table = $("#dataTable").DataTable({
      pageLength: 10,
    });
    return () => {
      table.destroy(true);
    };
  }, [books]);

  // Loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {message}</div>;

  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Book List" />
        <div className="card basic-data-table">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title mb-0">Total Books</h5>
            <h5 className="card-title mb-0">Add Books</h5>
            </div>
         
          </div>
          <div className="card-body">
            <table
              className="table bordered-table mb-0"
              id="dataTable"
              data-page-length={10}
            >
              <thead>
                <tr>
                  <th scope="col">
                    <div className="form-check style-check d-flex align-items-center">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">ID</label>
                    </div>
                  </th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Published Date</th>
                  <th scope="col">Availability</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>
                      <div className="form-check style-check d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">{book.id}</label>
                      </div>
                    </td>
                    <td>{book.title}</td>
                    <td>
                      <h6 className="text-md mb-0 fw-medium flex-grow-1">
                        {book.personalAuthor}
                      </h6>
                    </td>
                    <td>{book.subjectAddedEntry}</td>
                    <td>
                      {new Date(book.dateOfPublication).toLocaleDateString()}
                    </td>
                    <td>
                      <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                        Available
                      </span>
                    </td>
                    <td>
                      <Link
                        to={`/books/${book.id}`} // Link to view book details
                        className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                      >
                        <Icon icon="iconamoon:eye-light" />
                      </Link>
                      <Link
                        to={`/books/edit/${book.id}`} // Link to edit book
                        className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                      >
                        <Icon icon="lucide:edit" />
                      </Link>
                      <button
                        onClick={() => handleDelete(book.id)} // Delete book
                        className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center border-0"
                      >
                        <Icon icon="mingcute:delete-2-line" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MasterLayout>
    </>
  );
};

export default Catalogue;
