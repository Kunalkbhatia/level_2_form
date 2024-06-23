const validate = (values) => {
  let errors = {};


  if (!values.name) {
    errors.name = "Full Name is required";
  }



  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
    errors.email = "Email is invalid";
  }



  if (!values.phoneNumber) {
    errors.phoneNumber = "phoneNumber is required";
  } else if (values.phoneNumber.toString().length !== 10) {
    errors.phoneNumber = "Phone Number must be of 10 numbers (IN)";
  }



  if (!values.applyingForPosition) {
    errors.applyingForPosition =
      "Please Select the Position you are applying for";
  }


  if (
    values.applyingForPosition !== "Manager" &&
    values.relevantExperience <= 0
  ) {
    errors.relevantExperience = "Relevant Experience must greater than 0";
  }



  if (values.applyingForPosition === "Designer") {
    if (!values.portfolioURL) {
      errors.portfolioURL = "URL is required";
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(values.portfolioURL)) {
      errors.portfolioURL = "URL is invalid";
    }
  }



  if (values.applyingForPosition === "Manager" && !values.managerExperience) {
    errors.managerExperience = "Manager Experience Description is required";
  }



  if (
    !values.additionalSkills.JavaScript &&
    !values.additionalSkills.Python &&
    !values.additionalSkills.CSS
  ) {
    errors.skillError = "At least one skill must be selected";
  }



  if (!values.preferredInterviewTime) {
    errors.preferredInterviewTime = "Preferred interview time is required";
  } else {
    const UserselectedTime = new Date(values.preferredInterviewTime).getTime();
    const currentTime = new Date().getTime();


  if (UserselectedTime <= currentTime) {
      errors.preferredInterviewTime = "Preferred interview hours should belong to future";
    }
  }

  return errors;
};

export default validate;
