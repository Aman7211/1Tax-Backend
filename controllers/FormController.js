const Form = require('../models/Form');

const formregister = async (req, res) => {
  try {
    const { id, name, title, subtitle, keyword, paragraph } = req.body;

    if (!id || !name || !title || !paragraph || !keyword || !subtitle) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check if a form with the same ID already exists
    const existingForm = await Form.findOne({ id });
    if (existingForm) {
      return res.status(400).json({
        success: false,
        message: "Form with this ID already exists.",
      });
    }

    // Create a new form entry with a manual ID
    const newForm = new Form({
      id,  // Manually assigned ID
      name,
      title,
      subtitle,
      keyword,
      paragraph,
    });

    await newForm.save();

    return res.status(201).json({
      success: true,
      message: "Form successfully submitted.",
      data: newForm, // Returning created form
    });

  } catch (error) {
    console.error("Error in formregister:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to submit the form.",
    });
  }
};

const getallForm = async (req, res) => {
  try {
    const forms = await Form.find({});
    return res.status(200).json({
      success: true,
      message: "Successfully retrieved all forms.",
      data: forms,
    });

  } catch (error) {
    console.error("Error in getallForm:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve forms.",
    });
  }
};

// Get Form by ID (using manually assigned `id`)
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;

    const form = await Form.findOne({ id }); // Find by manually assigned `id`

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Form retrieved successfully.",
      data: form,
    });

  } catch (error) {
    console.error("Error in getFormById:", error);
    return res.status(500).json({
      success: false,
      message: "Error retrieving form.",
    });
  }
};

module.exports = { formregister, getallForm, getFormById };
