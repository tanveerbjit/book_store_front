import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file
import { useForm, Controller } from 'react-hook-form';
import Input from '../atoms/Input'; // Import your Input atom component
import Button from '../atoms/Button';
Button

function RegistrationForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const navigate = useNavigate();

  const isPasswordValid = (value) => {
    // Define your pattern validation here
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numbersRegex = /\d/;
    const symbolsRegex = /[@$!%*?&]/;

    return (
      lowercaseRegex.test(value) &&
      uppercaseRegex.test(value) &&
      numbersRegex.test(value) &&
      symbolsRegex.test(value)
    );
  };

  const msg = () => {
    return 'at least one digit, one character upper and lower, and one special character, minimum 8 characters, and max 20';
  };

  const handlerOnSubmit = () => {
    const userData = {
      first_name: getValues('first_name'),
      last_name: getValues('last_name'),
      user_name: getValues('user_name'),
      email: getValues('email'),
      password: getValues('password'),
    };
    // Perform API call and registration logic
    console.log(userData);
    navigate('/user');
  };

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit(handlerOnSubmit)}>
        <h2 className="form-signin-heading">Please Register</h2>
        <Controller
          name="first_name"
          control={control}
          rules={{
            required: 'First name is required',
            minLength: {
              value: 3,
              message: 'Minimum length must be 3',
            },
            maxLength: {
              value: 20,
              message: 'Maximum length must be 20',
            },
          }}
          render={({ field }) => (
            <div>
              <Input
                type={"text"}
                className={"form-control mt-3"}
                placeholder={"First Name"}
                field={field}
              />
            </div>
          )}
        />
        {errors.first_name && (
          <p className="text-danger">{errors.first_name.message}</p>
        )}
        <Controller
          name="last_name"
          control={control}
          rules={{
            required: 'Last name is required',
            minLength: {
              value: 3,
              message: 'Minimum length must be 3',
            },
            maxLength: {
              value: 20,
              message: 'Maximum length must be 20',
            },
          }}
          render={({ field }) => (
            <div>
              <Input
                type={"text"}
                className={"form-control mt-3"}
                placeholder={"Last Name"}
                field={field}
              />
            </div>
          )}
        />
        {errors.last_name && (
          <p className="text-danger">{errors.last_name.message}</p>
        )}
        <Controller
          name="user_name"
          control={control}
          rules={{
            required: 'User name is required',
            minLength: {
              value: 3,
              message: 'Minimum length must be 3',
            },
            maxLength: {
              value: 20,
              message: 'Maximum length must be 20',
            },
          }}
          render={({ field }) => (
            <div>
               <Input
                type={"text"}
                className={"form-control mt-3"}
                placeholder={"give user name"}
                field={field}
              />
            </div>
          )}
        />
        {errors.user_name && (
          <p className="text-danger">{errors.user_name.message}</p>
        )}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
            type={"email"}
            className={"form-control mt-3"}
            placeholder={"email"}
            field={field}
            />
          )}
          ///// email validation
          rules={{
            required: 'Email is required',
            maxLength: {
              value: 50,
              message: 'Maximum length must be 50',
            },
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
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: msg(),
            },
            maxLength: {
              value: 20,
              message: msg(),
            },
            validate: (value) => isPasswordValid(value) || msg(),
          }}
          render={({ field }) => (
            <Input
              type="password"
              className="form-control mt-3"
              placeholder="Enter Password"
              payload={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: 'Confirm Password is required',
            minLength: {
              value: 6,
              message: 'Minimum length must be 6',
            },
            maxLength: {
              value: 20,
              message: 'Max length must be 20',
            },
            validate: (value) =>
              value === watch('password') ||
              'Confirm password should match given password',
          }}
          render={({ field }) => (
            <Input
              type="password"
              className="form-control"
              placeholder="Enter Password Again"
              payload={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
        <br />
        
        <Button className={"btn btn-lg btn-primary btn-block"} type={"submit"}/>
        
        <div
          style={{
            width: '100%',
            display: 'flex',
            paddingTop: '10px',
            justifyContent: 'flex-end',
          }}
        >
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
