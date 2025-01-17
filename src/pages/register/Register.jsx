import React from 'react';
import "./register.scss";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Waste Bin!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam inventore modi eligendi culpa! Dolorum pariatur, voluptas repudiandae rerum impedit minima minus enim dolor, fuga ipsum tenetur ipsa similique quia?</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Full Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Register