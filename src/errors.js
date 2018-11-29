const ERR = {
  FED: {
    first_name: {
      required: 'Please enter a First Name.',
      alphaApostropheNospace: "Please enter a first name with only letters, hyphens (-), and apostrophes (')",
    },
    last_name: {
      required: 'Please enter a Last Name.',
      alphaApostropheNospace: "Please enter a last name with only letters, hyphens (-), and apostrophes (')",
    },
  },
  IS: {
    first_name: {
      required: 'Please enter a First Name.',
      alphaApostropheNospace: "Please enter a first name with only letters, hyphens (-), and apostrophes (')",
      hyphenRule: 'Please enter a First Name with characters immediately before and after the hyphen or apostrophe.',
    },
  },
};

export default ERR;
