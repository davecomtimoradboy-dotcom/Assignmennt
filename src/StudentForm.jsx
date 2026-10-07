import { useState } from "react";

function StudentForm() {

  // Course Registration
  const [course, setCourse] = useState({
    name: "",
    code: "",
    title: "",
    semester: ""
  });

  const [courseMessage, setCourseMessage] = useState("");

  // Feedback
  const [feedback, setFeedback] = useState({
    name: "",
    department: "",
    feedback: "",
    rating: ""
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Library
  const [library, setLibrary] = useState({
    fullName: "",
    email: "",
    phone: "",
    membership: "",
    terms: false
  });

  const [libraryMessage, setLibraryMessage] = useState("");


  // Course input
  function handleCourseChange(e) {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  }

  function submitCourse(e) {
    e.preventDefault();

    if (
      !course.name ||
      !course.code ||
      !course.title ||
      !course.semester
    ) {
      setCourseMessage("Please fill in all fields.");
      return;
    }

    setCourseMessage("Course registration successful!");
  }


  // Feedback input
  function handleFeedbackChange(e) {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  }

  function submitFeedback(e) {
    e.preventDefault();

    if (
      !feedback.name ||
      !feedback.department ||
      !feedback.feedback ||
      !feedback.rating
    ) {
      setFeedbackMessage("Please fill in all fields.");
      return;
    }

    setFeedbackMessage("Feedback submitted successfully!");
  }


  // Library input
  function handleLibraryChange(e) {

    const { name, value, type, checked } = e.target;

    setLibrary({
      ...library,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function submitLibrary(e) {
    e.preventDefault();

    if (
      !library.fullName ||
      !library.email ||
      !library.phone ||
      !library.membership
    ) {
      setLibraryMessage("Please fill in all fields.");
      return;
    }

    if (!library.terms) {
      setLibraryMessage(
        "You must accept the terms and conditions."
      );
      return;
    }

    setLibraryMessage(
      "Library membership submitted successfully!"
    );
  }


  return (
    <div className="container">

      <h1>Student Forms</h1>


      {/* COURSE REGISTRATION */}

      <div className="form-box">

        <h2>Course Registration Form</h2>

        <form onSubmit={submitCourse}>

          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={course.name}
            onChange={handleCourseChange}
            placeholder="Enter your name"
          />

          <label>Course Code</label>
          <input
            type="text"
            name="code"
            value={course.code}
            onChange={handleCourseChange}
            placeholder="e.g. CSC 201"
          />

          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleCourseChange}
            placeholder="Enter course title"
          />

          <label>Semester</label>

          <select
            name="semester"
            value={course.semester}
            onChange={handleCourseChange}
          >
            <option value="">Select Semester</option>
            <option value="First Semester">
              First Semester
            </option>
            <option value="Second Semester">
              Second Semester
            </option>
          </select>

          <button type="submit">
            Register Course
          </button>

        </form>


        {/* LIVE REVIEW */}

        <div className="review">

          <h3>Live Review</h3>

          <p>
            <strong>Student:</strong>{" "}
            {course.name || "---"}
          </p>

          <p>
            <strong>Course Code:</strong>{" "}
            {course.code || "---"}
          </p>

          <p>
            <strong>Course Title:</strong>{" "}
            {course.title || "---"}
          </p>

          <p>
            <strong>Semester:</strong>{" "}
            {course.semester || "---"}
          </p>

        </div>

        <p className="message">
          {courseMessage}
        </p>

      </div>


      {/* STUDENT FEEDBACK */}

      <div className="form-box">

        <h2>Student Feedback Form</h2>

        <form onSubmit={submitFeedback}>

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleFeedbackChange}
            placeholder="Enter your name"
          />


          <label>Department</label>

          <input
            type="text"
            name="department"
            value={feedback.department}
            onChange={handleFeedbackChange}
            placeholder="Enter your department"
          />


          <label>Feedback</label>

          <textarea
            name="feedback"
            value={feedback.feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
          ></textarea>


          <label>Rating</label>

          <select
            name="rating"
            value={feedback.rating}
            onChange={handleFeedbackChange}
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>


          <button type="submit">
            Submit Feedback
          </button>

        </form>

        <p className="message">
          {feedbackMessage}
        </p>

      </div>


      {/* LIBRARY MEMBERSHIP */}

      <div className="form-box">

        <h2>Library Membership Form</h2>

        <form onSubmit={submitLibrary}>

          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            value={library.fullName}
            onChange={handleLibraryChange}
            placeholder="Enter your full name"
          />


          <label>Email</label>

          <input
            type="email"
            name="email"
            value={library.email}
            onChange={handleLibraryChange}
            placeholder="Enter your email"
          />


          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            value={library.phone}
            onChange={handleLibraryChange}
            placeholder="Enter your phone number"
          />


          <label>Membership Type</label>

          <select
            name="membership"
            value={library.membership}
            onChange={handleLibraryChange}
          >
            <option value="">
              Select Membership
            </option>

            <option value="Student">
              Student
            </option>

            <option value="Regular">
              Regular
            </option>

            <option value="Premium">
              Premium
            </option>
          </select>


          <div className="terms">

            <input
              type="checkbox"
              name="terms"
              checked={library.terms}
              onChange={handleLibraryChange}
            />

            <span>
              I accept the terms and conditions
            </span>

          </div>


          <button type="submit">
            Join Library
          </button>

        </form>

        <p className="message">
          {libraryMessage}
        </p>

      </div>


      {/* EXPLANATION */}

      <div className="explanation">

        <h2>Why Validate Form Data?</h2>

        <p>
          Validation ensures that the information entered
          by the user is complete and correct before the
          system processes the data.
        </p>

      </div>

    </div>
  );
}

export default StudentForm;