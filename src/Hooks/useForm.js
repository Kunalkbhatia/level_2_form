import { useState } from "react";

const useForm = (initialValues, validate, setIsModalOpen) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues((prevValues) => {
      const newValues = { ...prevValues };

      if (name.includes(".")) {
        const keys = name.split(".");
        newValues[keys[0]] = {
          ...newValues[keys[0]],
          [keys[1]]: type === "checkbox" ? checked : value,
        };
      } else {
        newValues[name] = type === "checkbox" ? checked : value;
      }

      return newValues;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      console.log(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        setIsModalOpen(true);
      }
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
