import React from "react";
import * as yup from "yup";
import MasterLayout from "../../masterLayout/MasterLayout";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { createBook } from "../../redux/book/bookSlice";
import { toast } from "react-toastify";

// Validation schema using Yup
const schemaResolver = yupResolver(
  yup.object().shape({
    title: yup.string().required("Please enter Book Title"),
    accessionNumber: yup
      .number()
      .required("Please enter Accession Number")
      .min(1),
    isbnNo: yup.string().required("Please enter ISBN Number"),
    sourceOfAcquisition: yup
      .string()
      .required("Please enter Source of Acquisition"),
    language: yup.string().required("Please enter Language"),
    bookNumber: yup.number().required("Please enter Book Number").min(1),
    classNumber: yup.number().required("Please enter Class Number").min(1),
    publisherName: yup.string().required("Please enter Publisher Name"),
    dateOfPublication: yup
      .date()
      .nullable()
      .required("Please select Date of Publication"),

    personalAuthor: yup.string().nullable(),
    corporateAuthor: yup.string().nullable(),
    conferenceAuthor: yup.string().nullable(),

    statementOfResponsibility: yup.string().nullable(),

    editionStatement: yup.string().nullable(),
    physicalDescription: yup
      .string()
      .required("Please enter Physical Description"),

    subjectAddedEntry: yup.string().nullable(),
    addedEntryPersonalName: yup.string().nullable(),

    notes: yup.string().nullable(),
    source: yup.string().required("Please enter Source"),
    seriesTitle: yup.string().nullable(),

    seriesNo: yup.number().nullable(),
    date: yup.date().nullable().required("Please select Date "),

    placeOfPublication: yup
      .string()
      .required("Please enter Place of Publication"),
    noOfCopies: yup.number().required("Please enter Number of Copies").min(1),
    barCodes: yup
      .array()
      .of(yup.string())
      .min(1, "At least one barcode is required")
      .required("Please enter Bar Code(s)"),
    callNo: yup.string().required("Please enter Call Number"),
    price: yup.number().required("Please enter Price").min(0),
  })
);

const AddBook = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: schemaResolver,
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(createBook(data)).unwrap();
      toast.success("Book added successfully!");
    } catch (error) {
      toast.error("Failed to add book!");
    }
  };

  return (
    <MasterLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h6 className="text-uppercase bg-light p-2 mt-0 mb-3 text-center">
                  Basic Book Details
                </h6>

                {/* Book Title */}
                <Form.Group className="mb-3">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    {...register("title")}
                    isInvalid={!!errors.title}
                    placeholder="Enter book title"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* ISBN Number */}
                <Form.Group className="mb-3">
                  <Form.Label>ISBN Number</Form.Label>
                  <Form.Control
                    {...register("isbnNo")}
                    isInvalid={!!errors.isbnNo}
                    placeholder="Enter ISBN number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.isbnNo?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Accession Number */}
                <Form.Group className="mb-3">
                  <Form.Label>Accession Number</Form.Label>
                  <Form.Control
                    {...register("accessionNumber")}
                    isInvalid={!!errors.accessionNumber}
                    placeholder="Enter accession number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.accessionNumber?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Source of Acquisition */}
                <Form.Group className="mb-3">
                  <Form.Label>Source of Acquisition</Form.Label>
                  <Form.Control
                    {...register("sourceOfAcquisition")}
                    isInvalid={!!errors.sourceOfAcquisition}
                    placeholder="Enter source of acquisition"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sourceOfAcquisition?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Language */}
                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    {...register("language")}
                    isInvalid={!!errors.language}
                    placeholder="Enter language"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.language?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Book Number */}
                <Form.Group className="mb-3">
                  <Form.Label>Book Number</Form.Label>
                  <Form.Control
                    {...register("bookNumber")}
                    isInvalid={!!errors.bookNumber}
                    placeholder="Enter book number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.bookNumber?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Class Number */}
                <Form.Group className="mb-3">
                  <Form.Label>Class Number</Form.Label>
                  <Form.Control
                    {...register("classNumber")}
                    isInvalid={!!errors.classNumber}
                    placeholder="Enter class number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.classNumber?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Publisher Name */}
                <Form.Group className="mb-3">
                  <Form.Label>Publisher Name</Form.Label>
                  <Form.Control
                    {...register("publisherName")}
                    isInvalid={!!errors.publisherName}
                    placeholder="Enter publisher name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.publisherName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Date of Publication */}
                <Form.Group className="mb-3">
                  <Form.Label>Date of Publication</Form.Label>
                  <Controller
                    name="dateOfPublication"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="date"
                        isInvalid={!!errors.dateOfPublication}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dateOfPublication?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Series Number</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("seriesNo")}
                    isInvalid={!!errors.seriesNo}
                    placeholder="Enter Series Number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.seriesNo?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("date")}
                    isInvalid={!!errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.date?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card>
              <Card.Body>
                <h6 className="text-uppercase mt-0 mb-3 bg-light p-2  text-center">
                  Additional Book Details
                </h6>

                <Form.Group className="mb-3">
                  <Form.Label>Added Entry Personal Name</Form.Label>
                  <Form.Control
                    {...register("addedEntryPersonalName")}
                    isInvalid={!!errors.addedEntryPersonalName}
                    placeholder="Enter Added Entry Personal Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.addedEntryPersonalName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    {...register("notes")}
                    isInvalid={!!errors.notes}
                    placeholder="Enter Notes"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.notes?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Source</Form.Label>
                  <Form.Control
                    {...register("source")}
                    isInvalid={!!errors.source}
                    placeholder="Enter Source"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.source?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Series Title</Form.Label>
                  <Form.Control
                    {...register("seriesTitle")}
                    isInvalid={!!errors.seriesTitle}
                    placeholder="Enter Series Title"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.seriesTitle?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Subject Added Entry</Form.Label>
                  <Form.Control
                    {...register("subjectAddedEntry")}
                    isInvalid={!!errors.subjectAddedEntry}
                    placeholder="Enter Subject Added Entry"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subjectAddedEntry?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Edition Statement</Form.Label>
                  <Form.Control
                    {...register("editionStatement")}
                    isInvalid={!!errors.editionStatement}
                    placeholder="Enter Edition Statement"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.editionStatement?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Physical Description</Form.Label>
                  <Form.Control
                    {...register("physicalDescription")}
                    isInvalid={!!errors.physicalDescription}
                    placeholder="Enter Physical Description"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.physicalDescription?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Statement of Responsibility</Form.Label>
                  <Form.Control
                    {...register("statementOfResponsibility")}
                    isInvalid={!!errors.statementOfResponsibility}
                    placeholder="Enter Statement of Responsibility"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.statementOfResponsibility?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* conference Author*/}
                <Form.Group className="mb-3">
                  <Form.Label>conference Author</Form.Label>
                  <Form.Control
                    {...register("conferenceAuthor")}
                    isInvalid={!!errors.conferenceAuthor}
                    placeholder="Enter conference Author"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.conferenceAuthor?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* personalAuthor*/}
                <Form.Group className="mb-3">
                  <Form.Label>Personal Author</Form.Label>
                  <Form.Control
                    {...register("personalAuthor")}
                    isInvalid={!!errors.personalAuthor}
                    placeholder="Enter personal Author"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.personalAuthor?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* corporate Author*/}
                <Form.Group className="mb-3">
                  <Form.Label>Corporate Author</Form.Label>
                  <Form.Control
                    {...register("corporateAuthor")}
                    isInvalid={!!errors.placeOfPublication}
                    placeholder="Enter personal Author"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.corporateAuthor?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*---------------------- Place of Publication */}
                <Form.Group className="mb-3">
                  <Form.Label>Place of Publication</Form.Label>
                  <Form.Control
                    {...register("placeOfPublication")}
                    isInvalid={!!errors.placeOfPublication}
                    placeholder="Enter place of publication"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.placeOfPublication?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Bar Codes */}
                <Form.Group className="mb-3">
                  <Form.Label>Bar Codes</Form.Label>
                  <Controller
                    name="barCodes"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Enter barcode(s), separated by commas"
                        onChange={(e) => {
                          const values = e.target.value
                            .split(",")
                            .map((v) => v.trim());
                          field.onChange(values);
                        }}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.barCodes?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Price */}
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    {...register("price")}
                    isInvalid={!!errors.price}
                    placeholder="Enter price"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Number of Copies */}
                <Form.Group className="mb-3">
                  <Form.Label>Number of Copies</Form.Label>
                  <Form.Control
                    {...register("noOfCopies")}
                    isInvalid={!!errors.noOfCopies}
                    placeholder="Enter number of copies"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.noOfCopies?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Call Number */}
                <Form.Group className="mb-3">
                  <Form.Label>Call Number</Form.Label>
                  <Form.Control
                    {...register("callNo")}
                    isInvalid={!!errors.callNo}
                    placeholder="Enter call number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.callNo?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="text-center mb-3">
              <button
                type="button"
                className="btn w-sm btn-light waves-effect me-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn w-sm btn-success waves-effect waves-light me-1"
              >
                Save
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </MasterLayout>
  );
};

export default AddBook;
