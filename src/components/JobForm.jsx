import React, { useState } from "react";
import useForm from "../Hooks/useForm.js";
import validate from "../Utils/validate.js";
import "../App.css";
import Modal from "./Modal.jsx";

const JobForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      name: "",
      email: "",
      phoneNumber: null,
      applyingForPosition: "",
      relevantExperience: 0,
      portfolioURL: "",
      managerExperience: "",
      additionalSkills: {
        JavaScript: false,
        CSS: false,
        Python: false,
      },
      preferredInterviewTime: "",
    },
    validate,
    setIsModalOpen
  );

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <>
      <h1 className="heading">Task/Level - 2</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>FullName</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>

          <div>
            <label>Applying for Position</label>
            <select
              name="applyingForPosition"
              value={values.applyingForPosition}
              onChange={handleChange}
            >
              <option value="">Select Position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.applyingForPosition && <p>{errors.applyingForPosition}</p>}
          </div>

          {(values.applyingForPosition == "Designer" ||
            values.applyingForPosition === "Developer") && (
            <div>
              <label>Relevant Experience</label>
              <input
                type="number"
                name="relevantExperience"
                value={values.relevantExperience}
                onChange={handleChange}
              />
              {errors.relevantExperience && <p>{errors.relevantExperience}</p>}
            </div>
          )}

          {values.applyingForPosition === "Designer" && (
            <div>
              <label>Portfolio URL</label>
              <input
                type="text"
                name="portfolioURL"
                value={values.portfolioURL}
                onChange={handleChange}
              />
              {errors.portfolioURL && <p>{errors.portfolioURL}</p>}
            </div>
          )}

          {values.applyingForPosition === "Manager" && (
            <div>
              <label>Manager Experience</label>
              <textarea
                type="text"
                name="managerExperience"
                value={values.managerExperience}
                onChange={handleChange}
              />
              {errors.managerExperience && <p>{errors.managerExperience}</p>}
            </div>
          )}

          <div>
            <label>Additional Skills</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name={`additionalSkills.JavaScript`}
                  checked={values.additionalSkills.JavaScript}
                  onChange={handleChange}
                />
                JavaScript
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name={`additionalSkills.CSS`}
                  checked={values.additionalSkills.CSS}
                  onChange={handleChange}
                />
                CSS
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name={`additionalSkills.Python`}
                  checked={values.additionalSkills.Python}
                  onChange={handleChange}
                />
                Python
              </label>
            </div>
            {errors.skillError && <p>{errors.skillError}</p>}
          </div>

          <div>
            <label>Preferred Interview Time</label>
            <input
              type="datetime-local"
              name="preferredInterviewTime"
              value={values.preferredInterviewTime}
              onChange={handleChange}
            />
            {errors.preferredInterviewTime && (
              <p>{errors.preferredInterviewTime}</p>
            )}
          </div>

          <button type="submit">Apply</button>
        </form>
      </div>

      <Modal
        values={values}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default JobForm;
