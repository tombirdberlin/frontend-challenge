// Wait for the DOM to be ready
$(function() {
	
	// Add custim Method for validation characters a-z and A-Z
	jQuery.validator.addMethod("isChar", function (value, element) {
        if (/^[[a-zA-Z ]+$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Please only use characters.");

  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contact_form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      Name: {
		required: true,
		isChar: true
	  },
      EMail: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      Telefon: {
		digits: true
	  },
      Kommentar: {
        required: true,
        minlength: 5,
		maxlength: 500
      }
    },
    // Specify validation error messages
    messages: {
      Name: {
		required: "Bitte einen Namen eingeben.",
		isChar: "Bitte nur Buchstaben beim Namen eingeben."
	  },
	  EMail: "Bitte eine gültige E-Mail Adresse eingeben.",
	  Telefon: {
		digits: "Telefon bitte nur als Ziffern eingeben."
	  },
      Kommentar: {
        required: "Bitte einen Kommentar eingeben.",
		minlength: "Dein Text ist zu kurz, bitte mindestens 5 Zeichen eingeben.",
        maxlength: "Dein Text ist zu lang, bitte maximal 500 Zeichen eingeben."
      }      
    },
    errorElement : 'p',
    errorLabelContainer: '.validation-error',
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});