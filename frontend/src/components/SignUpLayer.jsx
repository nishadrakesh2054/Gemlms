//  import { Icon } from "@iconify/react/dist/iconify.js";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const SignUpLayer = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//     agreeTerms: false,
//   });
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [error, setError] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const roles = ["admin", "teacher", "student", "librarian", "HR", "counselor"];

//   useEffect(() => {
//     // Check if an admin already exists
//     const checkAdminStatus = async () => {
//       const response = await fetch("http://localhost:5000/api/check-admin");
//       const data = await response.json();
//       setIsAdmin(data.isAdminPresent);
//     };

//     checkAdminStatus();
//   }, []);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.password) {
//       setError("All fields are required!");
//       return;
//     }

//     if (!formData.agreeTerms) {
//       setError("You must agree to the terms & conditions.");
//       return;
//     }

//     try {
//       // Register as admin if the first user
//       const url =
//       isAdmin && formData.role !== "admin"
//         ? "http://localhost:5000/api/register"
//         : "http://localhost:5000/api/register/admin";

//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//       if (!response.ok) {
//         const resData = await response.json();
//         throw new Error(resData.message || "Signup failed.");
//       }

//       alert("Signup successful!");
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         role: "student",
//         agreeTerms: false,
//       });
//       setError("");
//       setIsAdmin(false); // Reset for future users
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <section className="auth bg-base d-flex flex-wrap">
//       <div className="auth-left d-lg-block d-none">
//         <div className="d-flex align-items-center flex-column h-100 justify-content-center">
//           <img src="assets/images/auth/auth-img.png" alt="" />
//         </div>
//       </div>
//       <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
//         <div className="max-w-464-px mx-auto w-100">
//           <div>
//             <Link to="/" className="mb-40 max-w-290-px">
//               <img src="assets/images/logo.png" alt="" />
//             </Link>
//             <h4 className="mb-12">Sign Up to your Account</h4>
//             <p className="mb-32 text-secondary-light text-lg">
//               Welcome back! please enter your detail
//             </p>
//           </div>
//           {/* <form action='#'>
//             <div className='icon-field mb-16'>
//               <span className='icon top-50 translate-middle-y'>
//                 <Icon icon='f7:person' />
//               </span>
//               <input
//                 type='text'
//                 className='form-control h-56-px bg-neutral-50 radius-12'
//                 placeholder='Username'
//               />
//             </div>
//             <div className='icon-field mb-16'>
//               <span className='icon top-50 translate-middle-y'>
//                 <Icon icon='mage:email' />
//               </span>
//               <input
//                 type='email'
//                 className='form-control h-56-px bg-neutral-50 radius-12'
//                 placeholder='Email'
//               />
//             </div>
//             <div className='mb-20'>
//               <div className='position-relative '>
//                 <div className='icon-field'>
//                   <span className='icon top-50 translate-middle-y'>
//                     <Icon icon='solar:lock-password-outline' />
//                   </span>
//                   <input
//                     type='password'
//                     className='form-control h-56-px bg-neutral-50 radius-12'
//                     id='your-password'
//                     placeholder='Password'
//                   />
//                 </div>
//                 <span
//                   className='toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light'
//                   data-toggle='#your-password'
//                 />
//               </div>
//               <span className='mt-12 text-sm text-secondary-light'>
//                 Your password must have at least 8 characters
//               </span>
//             </div>

//             <div className=''>
//               <div className='d-flex justify-content-between gap-2'>
//                 <div className='form-check style-check d-flex align-items-start'>
//                   <input
//                     className='form-check-input border border-neutral-300 mt-4'
//                     type='checkbox'
//                     defaultValue=''
//                     id='condition'
//                   />
//                   <label
//                     className='form-check-label text-sm'
//                     htmlFor='condition'
//                   >
//                     By creating an account means you agree to the
//                     <Link to='#' className='text-primary-600 fw-semibold'>
//                       Terms &amp; Conditions
//                     </Link>{" "}
//                     and our
//                     <Link to='#' className='text-primary-600 fw-semibold'>
//                       Privacy Policy
//                     </Link>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <button
//               type='submit'
//               className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
//             >
//               {" "}
//               Sign Up
//             </button>
//             <div className='mt-32 center-border-horizontal text-center'>
//               <span className='bg-base z-1 px-4'>Or sign up with</span>
//             </div>
//             <div className='mt-32 d-flex align-items-center gap-3'>
//               <button
//                 type='button'
//                 className='fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50'
//               >
//                 <Icon
//                   icon='ic:baseline-facebook'
//                   className='text-primary-600 text-xl line-height-1'
//                 />
//                 Google
//               </button>
//               <button
//                 type='button'
//                 className='fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50'
//               >
//                 <Icon
//                   icon='logos:google-icon'
//                   className='text-primary-600 text-xl line-height-1'
//                 />
//                 Google
//               </button>
//             </div>
//             <div className='mt-32 text-center text-sm'>
//               <p className='mb-0'>
//                 Already have an account?{" "}
//                 <Link to='/sign-in' className='text-primary-600 fw-semibold'>
//                   Sign In
//                 </Link>
//               </p>
//             </div>
//           </form> */}
//           <form onSubmit={handleSubmit}>
//             {error && <p className="text-danger">{error}</p>}

//             <div className="icon-field mb-16">
//               <span className="icon top-50 translate-middle-y">
//                 <Icon icon="f7:person" />
//               </span>
//               <input
//                 type="text"
//                 className="form-control h-56-px bg-neutral-50 radius-12"
//                 placeholder="Username"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="icon-field mb-16">
//               <span className="icon top-50 translate-middle-y">
//                 <Icon icon="mage:email" />
//               </span>
//               <input
//                 type="email"
//                 className="form-control h-56-px bg-neutral-50 radius-12"
//                 placeholder="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-20">
//               <div className="position-relative">
//                 <div className="icon-field">
//                   <span className="icon top-50 translate-middle-y">
//                     <Icon icon="solar:lock-password-outline" />
//                   </span>
//                   <input
//                     type={passwordVisible ? "text" : "password"}
//                     className="form-control h-56-px bg-neutral-50 radius-12"
//                     id="your-password"
//                     placeholder="Password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <span
//                   className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
//                   onClick={() => setPasswordVisible(!passwordVisible)}
//                 />
//               </div>
//               <span className="mt-12 text-sm text-secondary-light">
//                 Your password must have at least 8 characters
//               </span>
//             </div>

//             {/* Role Selection Dropdown - Only visible for non-admins */}
//             {!isAdmin && (
//               <div className="mb-16">
//                 <label>Select Role</label>
//                 <select
//                   className="form-control h-56-px bg-neutral-50 radius-12"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                 >
//                   {roles.map((role) => (
//                     <option key={role} value={role}>
//                       {role.charAt(0).toUpperCase() + role.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             <div className="form-check style-check d-flex align-items-start">
//               <input
//                 className="form-check-input border border-neutral-300 mt-4"
//                 type="checkbox"
//                 name="agreeTerms"
//                 checked={formData.agreeTerms}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label text-sm">
//                 By creating an account, you agree to the{" "}
//                 <Link to="#" className="text-primary-600 fw-semibold">
//                   Terms & Conditions
//                 </Link>{" "}
//                 and our{" "}
//                 <Link to="#" className="text-primary-600 fw-semibold">
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
//             >
//               Sign Up
//             </button>

//             <div className="mt-32 center-border-horizontal text-center">
//               <span className="bg-base z-1 px-4">Or sign up with</span>
//             </div>

//             <div className="mt-32 d-flex align-items-center gap-3">
//               <button
//                 type="button"
//                 className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
//               >
//                 <Icon
//                   icon="ic:baseline-facebook"
//                   className="text-primary-600 text-xl line-height-1"
//                 />
//                 Facebook
//               </button>
//               <button
//                 type="button"
//                 className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
//               >
//                 <Icon
//                   icon="logos:google-icon"
//                   className="text-primary-600 text-xl line-height-1"
//                 />
//                 Google
//               </button>
//             </div>

//             <div className="mt-32 text-center text-sm">
//               <p className="mb-0">
//                 Already have an account?{" "}
//                 <Link to="/sign-in" className="text-primary-600 fw-semibold">
//                   Sign In
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUpLayer;

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpLayer = () => {
     const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    agreeTerms: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isAdminPresent, setIsAdminPresent] = useState(false);

  const roles = ["admin", "teacher", "student", "librarian", "HR", "counselor"];

  // Check if an admin exists on component mount
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/check-admin");
        setIsAdminPresent(response.data.isAdminPresent);
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };

    checkAdminStatus();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the terms & conditions.");
      return;
    }

    // Determine the registration URL based on admin presence and role
    const url =
    formData.role === "admin" && !isAdminPresent
      ? "http://localhost:5000/api/register/admin" // ✅ Register the first admin
      : "http://localhost:5000/api/register"; // ✅ Register other users
  

    try {
      const headers = { "Content-Type": "application/json" };
      const token = localStorage.getItem("token");
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(formData),
      });

      const resData = await response.json();
      if (!response.ok) throw new Error(resData.message || "Signup failed.");

      alert("Signup successful!");
      
      navigate("/sign-in");

      // Update admin presence after registration if an admin was registered
      if (formData.role === "admin") {
        setIsAdminPresent(true);
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "student",
        agreeTerms: false,
      });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="auth bg-base d-flex flex-wrap">
      <div className="auth-left d-lg-block d-none">
        <div className="d-flex align-items-center flex-column h-100 justify-content-center">
          <img src="assets/images/auth/auth-img.png" alt="Sign Up" />
        </div>
      </div>
      <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
        <div className="max-w-464-px mx-auto w-100">
          <div>
            <Link to="/" className="mb-40 max-w-290-px">
              <img src="assets/images/logo.png" alt="Logo" />
            </Link>
            <h4 className="mb-12">Sign Up to your Account</h4>
            <p className="mb-32 text-secondary-light text-lg">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <p className="text-danger">{error}</p>}

            <div className="icon-field mb-16">
              <span className="icon top-50 translate-middle-y">
                <Icon icon="f7:person" />
              </span>
              <input
                type="text"
                className="form-control h-56-px bg-neutral-50 radius-12"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="icon-field mb-16">
              <span className="icon top-50 translate-middle-y">
                <Icon icon="mage:email" />
              </span>
              <input
                type="email"
                className="form-control h-56-px bg-neutral-50 radius-12"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-20">
              <div className="position-relative">
                <div className="icon-field">
                  <span className="icon top-50 translate-middle-y">
                    <Icon icon="solar:lock-password-outline" />
                  </span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control h-56-px bg-neutral-50 radius-12"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <span
                  className="cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <Icon icon={passwordVisible ? "mdi:eye-off" : "mdi:eye"} />
                </span>
              </div>
              <span className="mt-12 text-sm text-secondary-light">
                Your password must have at least 8 characters.
              </span>
            </div>

            {/* Role Selection Dropdown (Only shown if an admin exists) */}
            {isAdminPresent && (
              <div className="mb-16">
                <label>Select Role</label>
                <select
                  className="form-control h-56-px bg-neutral-50 radius-12"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-check style-check d-flex align-items-start">
              <input
                className="form-check-input border border-neutral-300 mt-4"
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label className="form-check-label text-sm">
                By creating an account, you agree to the{" "}
                <Link to="#" className="text-primary-600 fw-semibold">
                  Terms & Conditions
                </Link>{" "}
                and our{" "}
                <Link to="#" className="text-primary-600 fw-semibold">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
            >
              Sign Up
            </button>

            <div className="mt-32 text-center text-sm">
              <p className="mb-0">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-primary-600 fw-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpLayer;