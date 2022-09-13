import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./input";

export const Form = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    location: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  const [errors, setErrors] = useState({
    location: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  const getFieldData = (event) => {
    const { name, value } = event.target;
    const fieldName = name;
    const fieldValue = value;
    return { fieldName, fieldValue };
  };

  const handleChange = (event) => {
    const { fieldName, fieldValue } = getFieldData(event);
    setFormValues({ ...formValues, [fieldName]: fieldValue });
  };

  const isFormValid = (e) => {
    let formIsValid = true;

    if (formValues.location === "") {
      formIsValid = false;
      errors.location = "Please enter your location.";
    } else {
      errors.location = "";
    }

    if (formValues.location !== "") {
      if (!formValues.location.match(/^[A-Za-z]+$/)) {
        formIsValid = false;
        errors.location = "Please enter a valid location";
      }
    }

    if (formValues.description === "") {
      formIsValid = false;
      errors.description = "Please enter description.";
    } else {
      errors.description = "";
    }

    if (formValues.latitude === "") {
      formIsValid = false;
      errors.latitude = "Please enter latitude.";
    } else {
      errors.latitude = "";
    }

    // validation for two decimal places
    // if (formValues.latitude !== "") {
    //   if (!formValues.latitude.match(/^(\d{1,5}|\d{0,5}\.\d{1,2})$/)) {
    //     formIsValid = false;
    //     errors.latitude = "Please enter a valid latitude";
    //   }
    // }

    if (formValues.longitude === "") {
      formIsValid = false;
      errors.longitude = "Please enter longitude.";
    } else {
      errors.longitude = "";
    }

    // validation for two decimal places
    // if (formValues.longitude !== "") {
    //   if (!formValues.longitude.match(/^(\d{1,5}|\d{0,5}\.\d{1,2})$/)) {
    //     formIsValid = false;
    //     errors.longitude = "Please enter a valid longitude";
    //   }
    // }
    setErrors({ ...errors, [e.target.name]: errors[e.target.name] });
    return formIsValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid(event)) {
      return;
    }
    navigate("/map", {
      state: {
        values: {
          ...formValues,
          latitude: parseFloat(formValues.latitude).toFixed(2),
          longitude: parseFloat(formValues.longitude).toFixed(2),
        }
      },
    });
  };

  return (
    <div className="app">
      <h3 className="heading">Please enter your location details!</h3>
      <form>
        <Input
          type="text"
          name="location"
          value={formValues.location}
          handleChange={handleChange}
          placeholder="Location"
        />
        <p className="error">{errors.location}</p>
        <Input
          type="text"
          name="description"
          value={formValues.description}
          handleChange={handleChange}
          placeholder="Description"
        />
        <p className="error">{errors.description}</p>
        <Input
          type="text"
          name="latitude"
          value={formValues.latitude}
          handleChange={handleChange}
          placeholder="Latitude"
        />
        <p className="error">{errors.latitude}</p>
        <Input
          type="text"
          name="longitude"
          value={formValues.longitude}
          handleChange={handleChange}
          placeholder="Longitude"
        />
        <p className="error">{errors.longitude}</p>
        <Input
          type="submit"
          value="Submit"
          onClick={submitHandler}
          className={`submit-btn`}
        />
      </form>
      <style jsx>{`
        .app {
          width: 40%;
          margin: 0 auto;
        }
        .heading {
          margin-top: 100px;
          text-align: center;
        }
        .submit-btn {
          width: 30%;
          margin: 0 auto;
          border: 0;
          border-radius: 8px;
          color: white;
          font-weight: bold;
          font-size: 16px;
          background-color: #ff781f;
        }
        .error {
          color: #ff0000;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};
