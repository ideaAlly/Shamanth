import axios from "axios";
import { useRef, useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const data = [
    { Stack: 'Artificial Intelligence', id: 1},
    { Stack: 'Web development', id: 2},
    { Stack: 'Machine Learning', id: 3},
    { Stack: 'Natural Language Processing', id: 4},
    { Stack: 'Deep Learning', id: 5},
    { Stack: 'Robotics', id: 6}

  ]
  const[options] = useState(data);


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="loginLogo">IdeaAlly</h1>
          <span className="loginDesc">
            <h3 className="Hovering">Connect with people </h3>
            <h3 className="Hovering">and the world around you</h3>{" "}
            <h3 className="Hovering">on IdeaAlly.</h3>
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
          <div className="Interests">
              <Multiselect options={options} displayValue="Stack"/>
            </div>

            <button className="loginButton" type="submit">
              <Link to="/login">Sign Up</Link>
            </button>
            <button className="loginRegisterButton"><Link to="/login">Log into Account</Link></button>

          </form>

        </div>
      </div>
    </div>
  );
}
