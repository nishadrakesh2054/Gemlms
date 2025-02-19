import React, { useEffect } from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Catalogue = () => {
  useEffect(() => {
    const table = $("#dataTable").DataTable({
      pageLength: 10,
    });
    return () => {
      table.destroy(true);
    };
  }, []);
  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Book List" />
        <div className="card basic-data-table">
          <div className="card-header">
            <h5 className="card-title mb-0">Total Books</h5>
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
                <tr>
                  <td>
                    <div className="form-check style-check d-flex align-items-center">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">01</label>
                    </div>
                  </td>
                  <td>
                    {/* <Link to="#" className="text-primary-600">
                      #526534
                    </Link> */}
                    The Great Gatsby
                  </td>
                  <td>
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      F. Scott Fitzgerald
                    </h6>
                  </td>
                  <td>Thriller</td>
                  <td>1925</td>
                  <td>
                    {" "}
                    <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                      Available
                    </span>
                  </td>
                  <td>
                    <Link
                      to="#"
                      className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                    >
                      <Icon icon="iconamoon:eye-light" />
                    </Link>
                    <Link
                      to="#"
                      className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                    >
                      <Icon icon="lucide:edit" />
                    </Link>
                    <Link
                      to="#"
                      className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                    >
                      <Icon icon="mingcute:delete-2-line" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MasterLayout>
    </>
  );
};

export default Catalogue;
