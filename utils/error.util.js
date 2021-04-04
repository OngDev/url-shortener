const convertValidationErrorsToMessage = function (errors) {
    console.log(errors);
    return errors.reduce((result, error) => result+=`${error}\n`);
}

module.exports = {convertValidationErrorsToMessage}