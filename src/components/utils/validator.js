export function validator(data, config) {
  const errors = {};
  const urlRegExp = /^https?:\/\/(www\.)?\w+\..+/g;
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === '';
        break;
      case 'isInRange':
        statusValidate = data < config.min || data > config.max;
        break;
      case 'isUrl':
        statusValidate = !urlRegExp.test(data);
        break;
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
