import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert("Register Success ...!");
    console.log(data);
  }

  function onSetValue() {
    alert("Set Value called ");
    setValue("username", "abs");
  }

  let formValidations = {
    userName: {
      required: { value: true, message: "Username Required ..!" },
      minLength: { value: 3, message: "Username must > 3 characters" },
      maxLength: { value: 10, message: "Username must < 10 characters" },
      pattern: {
        value: /^[A-Z]/,
        message: "Username Always start with Capital letter",
      },
    },
    emailV: {
      required: { value: true, message: "Email is required" },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid Email format",
      },
    },
    contactV: {
      required: { value: true, message: "Contact is required" },
      pattern: {
        value: /^[789]\d{9}$/,
        message: "Must be 10 digits and starts with 7,8 or 9",
      },
    },
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <div className="form-grid">
          <div className="field-block">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={errors.username ? "input error" : "input"}
              {...register("username", formValidations.userName)}
            />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>

          <div className="field-block">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={errors.email ? "input error" : "input"}
              {...register("email", formValidations.emailV)}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="field-block">
            <label htmlFor="contact">Contact</label>
            <input
              id="contact"
              type="number"
              className={errors.contact ? "input error" : "input"}
              {...register("contact", formValidations.contactV)}
            />
            {errors.contact && <p className="error-message">{errors.contact.message}</p>}
          </div>

          <div className="field-block radio-group">
            <span className="label-text">Gender</span>
            <div className="option-row">
              <label>
                <input type="radio" value="male" {...register("gender")} />
                Male
              </label>
              <label>
                <input type="radio" value="female" {...register("gender")} />
                Female
              </label>
            </div>
          </div>

          <div className="field-block checkbox-group">
            <span className="label-text">Course</span>
            <div className="option-row checkbox-row">
              <label>
                <input type="checkbox" {...register("Course")} value="Java" />
                Java
              </label>
              <label>
                <input type="checkbox" {...register("Course")} value="Spring" />
                Spring
              </label>
              <label>
                <input type="checkbox" {...register("Course")} value="Python" />
                Python
              </label>
            </div>
          </div>

          <div className="field-block">
            <label htmlFor="batch">Batch</label>
            <select id="batch" className="input" {...register("batch")}>
              <option value="B101">B101</option>
              <option value="B102">B102</option>
              <option value="B103">B103</option>
              <option value="B104">B104</option>
            </select>
          </div>

          <div className="field-block">
            <label htmlFor="pincode">Pincode</label>
            <input id="pincode" type="number" className="input" {...register("adr.pincode")} />
          </div>

          <div className="field-block">
            <label htmlFor="area">Area</label>
            <input id="area" type="text" className="input" {...register("adr.area")} />
          </div>

          <div className="field-block">
            <label htmlFor="city">City</label>
            <input id="city" type="text" className="input" {...register("adr.city")} />
          </div>
        </div>

        <div className="button-row">
          <button type="submit" className="primary-btn">Register</button>
        </div>
      </form>

      <button type="button" className="secondary-btn" onClick={onSetValue}>Set Value</button>
    </div>
  );
}

export default Register;
