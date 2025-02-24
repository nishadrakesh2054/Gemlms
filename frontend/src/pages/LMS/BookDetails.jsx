import React from "react";
import { useParams, Link } from "react-router-dom";
import MasterLayout from "../../masterLayout/MasterLayout";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <MasterLayout>
        <div className="container mt-4">
          <h2 className="text-center text-danger">Book not found!</h2>
          <div className="text-center mt-3">
            <Link to="/books" className="btn btn-primary">
              Back to Book List
            </Link>
          </div>
        </div>
      </MasterLayout>
    );
  }

  return (
    <MasterLayout>
      <div className="container mt-4">
        <div className="card shadow-lg p-5">
          <h4 className="text-center mb-4 text-primary">{book.title}</h4>

          <div className="row mt-3">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <li>
                    <strong>ISBN:</strong> {book.isbnNo}
                  </li>
                </li>
                <li className="list-group-item">
                  <strong>Language:</strong> {book.language}
                </li>
                <li className="list-group-item">
                  <strong>Book Number:</strong> {book.bookNumber}
                </li>
                <li className="list-group-item">
                  <strong>Class Number:</strong> {book.classNumber}
                </li>

                <li className="list-group-item">
                  <strong>Personal Author:</strong> {book.personalAuthor}
                </li>
                <li className="list-group-item">
                  <strong>Corporate Author:</strong> {book.corporateAuthor}
                </li>
                <li className="list-group-item">
                  <strong>Conference Author:</strong> {book.conferenceAuthor}
                </li>
                <li className="list-group-item">
                  <strong>Statement of Responsibility:</strong>{" "}
                  {book.statementOfResponsibility}
                </li>
                <li className="list-group-item">
                  <strong>series Title:</strong> {book.seriesTitle}
                </li>

                <li className="list-group-item">
                  <strong>Edition:</strong> {book.editionStatement}
                </li>
                <li className="list-group-item">
                  <strong>Publisher:</strong> {book.publisherName}
                </li>
                <li className="list-group-item">
                  <strong>Published Date:</strong>{" "}
                  {new Date(book.dateOfPublication).toDateString()}
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Accession Number:</strong> {book.accessionNumber}
                </li>
                <li className="list-group-item">
                  <strong>Place of Publication:</strong>{" "}
                  {book.placeOfPublication}
                </li>
                <li className="list-group-item">
                  <strong>Place of Publication:</strong>{" "}
                  {book.placeOfPublication}
                </li>
                <li className="list-group-item">
                  <strong>Physical Description:</strong>{" "}
                  {book.physicalDescription}
                </li>
                <li className="list-group-item">
                  <strong>Subject:</strong> {book.subjectAddedEntry}
                </li>
                <li className="list-group-item">
                  <strong>Added Entry Personal Name:</strong>{" "}
                  {book.addedEntryPersonalName}
                </li>
                <li className="list-group-item">
                  <strong>Notes:</strong> {book.notes}
                </li>
                <li className="list-group-item">
                  <strong>Price:</strong> ${book.price}
                </li>
                <li className="list-group-item">
                  <strong>Source:</strong> {book.source}
                </li>
                <li className="list-group-item">
                  <strong>Series No:</strong> {book.seriesNo}
                </li>
                <li className="list-group-item">
                  <strong>Call Number:</strong> {book.callNo}
                </li>
                <li className="list-group-item">
                  <strong>No. of Copies:</strong> {book.noOfCopies}
                </li>

                <li className="list-group-item">
                  <strong>Barcodes:</strong>
                  {Array.isArray(book.barCodes) && book.barCodes.length > 0 ? (
                    book.barCodes.map((code, index) => (
                      <span key={index} className="badge bg-success m-1 p-2">
                        {code}
                      </span>
                    ))
                  ) : book.barCodes ? (
                    <span className="badge bg-success m-1 p-4 ">
                      {book.barCodes}
                    </span>
                  ) : (
                    <p>No barcodes available</p>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/books" className="btn btn-secondary me-3">
               Book List
            </Link>
            <Link to={`/books/edit/${book.id}`} className="btn btn-warning">
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default BookDetails;
