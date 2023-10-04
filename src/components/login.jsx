

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; 
import { useForm, Controller } from 'react-hook-form';
import useLoginForm from '../hooks/useLoginForm';

function LoginForm() {
  const { handleSubmit, errors, isSubmitting, onSubmit, control } = useLoginForm();
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-signin-heading">Please login</h2>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              {...field}
            />
          )}
          ///// email validation
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
              {...field}
            />
          )}
          ///// password validation
          rules={{
            required: 'Password is required',
            maxLength: {
              value: 20,
              message: 'Password must not exceed 20 characters',
            },
          }}
        />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <div style={{ width: '100%', display: 'flex', paddingTop: '10px', justifyContent: 'flex-end' }}>
          <p>
            Need an account? <Link to="/registration">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
