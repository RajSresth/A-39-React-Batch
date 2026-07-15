import { useRef } from "react";
import "./Signin.css";
import { toast, Bounce } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Sigin = () => {
  const fullnameRef = useRef(null); // fullnameRef = {current : <input type="text">}
  const emailRef = useRef(null); // emailRef = {current : <input type="email">}
  const passwordRef = useRef(null); // passwordRef = {current : <input type="password">}

  const handleSigninForm = (e) => {
    e.preventDefault();
    console.log(fullnameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    fullnameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";

    toast.success("Signin Successfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      pauseOnFocusLoss: false,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  console.log("Singin Component");

  return (
    <div className="singin__container">
      <form action="" id="signinForm" onSubmit={handleSigninForm}>
        <div className="singin__top">
          <h2>Signin</h2>
          <p>It takes 3 second</p>
        </div>

        <div className="field__container">
          <label htmlFor="fullname">
            Fullname<sup>*</sup>
          </label>

          <input
            type="text"
            id="fullname"
            ref={fullnameRef}
            placeholder="Enter fullname"
            required
          />
        </div>

        <div className="field__container">
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>

          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="field__container">
          <label htmlFor="password">
            Password<sup>*</sup>
          </label>

          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="At least 8 characters"
            required
          />

          {/* <div>
            <FaRegEye size={26} />
            <FaRegEyeSlash size={26} />
          </div> */}
        </div>

        <div className="button__container">
          <button type="submit">Signin</button>
          <button type="reset">Cancel</button>
        </div>

        <div className="signin__bottom">
          Already have an account?<a href="">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Sigin;
