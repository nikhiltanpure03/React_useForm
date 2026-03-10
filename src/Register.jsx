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
      required: { value: true, messsage: "Contact is required" },
      pattern: {
        value: /^[789]\d{9}$/,
        message: "Must be 10 digits and starts with 7,8 or 9",
      },
    },
  };
  return (
    <div>
      <pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username : <input type="text" {...register("username", { required: "Username required..!" })} /> <br /><br /> */}
          Username :{" "}
          <input
            type="text"
            {...register("username", formValidations.userName)}
          />{" "}
          <br />
          <br />
          {errors.username && <p>{errors.username.message}</p>}
          Email :{" "}
          <input type="email" {...register("email", formValidations.emailV)} />
          <br />
          <br />
          {errors.email && <p>{errors.email.message}</p>}
          Contact :{" "}
          <input
            type="number"
            {...register("contact", formValidations.contactV)}
          />
          <br />
          <br />
          {errors.contact && <p>{errors.contact.message}</p>}
          Gender : Male :
          <input type="radio" value="male" {...register("gender")} /> Female :
          <input type="radio" value="female" {...register("gender")} /> <br />
          <br />
          Course : Java{" "}
          <input type="checkbox" {...register("Course")} value="Java" />
          Spring{" "}
          <input type="checkbox" {...register("Course")} value="Spring" />{" "}
          Python{" "}
          <input type="checkbox" {...register("Course")} value="paython" />
          <br />
          <br />
          Batch :{" "}
          <select {...register("batch")}>
            <option>B101</option>
            <option>B102</option>
            <option>B103</option>
            <option>B104</option>
          </select>{" "}
          <br /> <br />
          Pincode : <input type="number" {...register("adr.pincode")} />
          <br />
          <br />
          area : <input type="text" {...register("adr.area")} />
          <br />
          <br />
          city : <input type="text" {...register("adr.city")} />
          <br />
          <br />
          <button>Register</button> <br /> <br />
        </form>
        <button onClick={onSetValue}>Set Value</button>
      </pre>
    </div>
  );
}

export default Register;
