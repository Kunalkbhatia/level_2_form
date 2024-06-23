import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({values,isModalOpen,closeModal}) => {

  return (
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Summary"
        className="modal-content"
        ariaHideApp={false}
      >
        <h2>Form Summary</h2>
        <p>Name: {values.name}</p>
        <p>Email: {values.email}</p>
        <p>Phone Number: {values.phoneNumber}</p>
        <p>Applying for Position: {values.applyingForPosition}</p>
        {values.applyingForPosition !== "Manager" && (
          <p>Relevant Experience: {values.relevantExperience}</p>
        )}
        {values.applyingForPosition === "Designer" && (
          <p>Portfolio URL: {values.portfolioURL}</p>
        )}
        {values.applyingForPosition === "Manager" && (
          <p>Manager Experience: {values.managerExperience}</p>
        )}
        <p>Additional Skills:</p>
        <ul>
          {Object.keys(values.additionalSkills)
            .filter((skill) => values.additionalSkills[skill])
            .map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
        </ul>
        <p>Preferred Interview Time: {values.preferredInterviewTime}</p>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
  )
}

export default Modal
