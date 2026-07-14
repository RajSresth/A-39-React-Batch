import { useState } from "react";
import "./Signin.css";
import { toast,Bounce } from "react-toastify";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
 

const Sigin = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSigninForm = (e) => {
        e.preventDefault();
        console.log("fullname:",fullname);
        console.log("Email:",email);
        console.log("Password:",password);

        setFullname("");
        setEmail("");
        setPassword("");

        toast.success("Signin Successfull",{
            position:"top-right",
            autoClose: 5000,
            hideProgressBar:false,
            closeOnClick: false,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
            transition: Bounce,
        })
  }

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
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            required
          />

          <div>
            <FaRegEye size={26} />
            <FaRegEyeSlash size={26} />
          </div>
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
