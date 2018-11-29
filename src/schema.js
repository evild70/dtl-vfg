import { validators } from 'vue-form-generator';
import DTL from './dtl';

export default {
  client: 'FED',
  fields: [
    {
      type: 'input',
      model: 'first_name',
      label: 'First Name',
      inputType: 'text',
      required: true,
      validator: [DTL.validator.alphaApostropheNospace, DTL.validator.hyphenRule, validators.required],
      // hint: 'Enter a first name that only contains non-numeric characters, apostrophe or hyphen.',
      dtlFieldError: 'first_name',
    },
    {
      type: 'statictext',
      content: `<h3>This is a block of static text with an image.</h3>
        <img src="https://pbs.twimg.com/profile_images/3043815282/36f9c8bca9088f9dd7e6d561672ce518.jpeg" width="50">`,
    },
    {
      type: 'input',
      model: 'last_name',
      label: 'Last Name',
      inputType: 'text',
      required: true,
      validator: [DTL.validator.alphaApostropheNospace, DTL.validator.hyphenRule, validators.required],
      // hint: 'Enter a first name that only contains non-numeric characters, apostrophe or hyphen.',
      dtlFieldError: 'last_name',
    },
    {
      type: 'select',
      model: 'state',
      label: 'State',
      selectOptions: {
        hideNoneSelectedText: true,
        value: 'value',
      },
      values: function() {
        return [
          { value: 'AL', name: 'Alabama' },
          { value: 'CA', name: 'California' },
          { value: 'MN', name: 'Minnesota' },
          { value: 'MT', name: 'Montana' },
          { value: 'WY', name: 'Wyoming' },
        ];
      },
      required: true,
      validator: ['required'],
      // hint: 'Enter a first name that only contains non-numeric characters, apostrophe or hyphen.',
    },
    {
      type: 'radios',
      model: 'delivery',
      label: 'Delivery Type',
      values: [{ name: 'Mail', value: 'mail' }, { name: 'Email', value: 'email' }],
      required: true,
      validator: [DTL.validator.alphaApostropheNospace, DTL.validator.hyphenRule, validators.required],
      // hint: 'Enter a first name that only contains non-numeric characters, apostrophe or hyphen.',
    },
    {
      type: 'input',
      model: 'email',
      label: 'Email',
      inputType: 'text',
      required: true,
      validator: validators.email,
      visible: DTL.validator.showEmail,
      dtlVisibleUsing: {
        name: 'DTL.util.and',
        args: [
          {
            name: 'DTL.util.equals',
            args: ['delivery', 'email'],
          },
          {
            name: 'DTL.util.has',
            args: ['state', ['CA', 'MT']],
          },
        ],
      },
    },
    {
      type: 'submit',
      buttonText: 'Submit',
      onSubmit: (model, schema) => {
        console.log('Form should not submit if the input is empty');
      },
      onValidationError: () => {
        console.log('No validation error when submit although the field is required');
      },
      validateBeforeSubmit: true,
    },
  ],
};
