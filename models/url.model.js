const yup = require('yup')
const schema = yup.object().shape({
  slug: yup.string(),
  url: yup.string().url("Điền cái URL gì kì vậy pa").required('Điền thông tin có tâm đi bạn êi!'),
  created: yup.date().default(function () {
    return new Date()
  }),
})

module.exports = schema
