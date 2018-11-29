import Schema from './schema';
import ERR from './errors';

const DTL = {
  validator: {
    alphaApostropheNospace: (value, obj) => {
      let re = /^[a-zA-Z\-\']*$/;
      let err = "Enter only letters, hyphens (-), and apostrophes (')";
      err = ERR[Schema.client][obj.dtlFieldError].alphaApostropheNospace || err;
      if (!re.test(value)) {
        return [err];
      } else {
        return [];
      }
    },

    hyphenRule: (value, obj) => {
      if (value.indexOf("'") > -1 || value.indexOf('-') > -1) {
        let re = /\b\w*['-]\w*\b/;
        let err = 'Enter characters immediately before and after the hyphen or apostrophe.';
        err = ERR[Schema.client][obj.dtlFieldError].hyphenRule || err;
        if (!re.test(value)) {
          return [err];
        } else {
          return [];
        }
      }
      return [];
    },

    showEmail: (model, obj) => {
      return isRequired(model, obj.dtlVisibleUsing);
    },
  },
};

const Utils = {
  'DTL.util.and': function(model, args) {
    let ret = true;
    for (let i = 0; i < args.length; i++) {
      ret = ret && getFunction(args[i].name)(model, args[i].args);
    }
    return ret;
  },

  'DTL.util.equals': function(model, args) {
    return model[args[0]] === args[1];
  },

  'DTL.util.has': function(model, args) {
    return args[1].indexOf(model[args[0]]) > -1;
  },
};

function getFunction(name) {
  return Utils[name];
}

function isRequired(model, expression) {
  return getFunction(expression.name)(model, expression.args);
}

export default DTL;
