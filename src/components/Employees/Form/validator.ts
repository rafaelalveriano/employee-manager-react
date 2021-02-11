import * as yup from 'yup'

export default yup.object({
  firstName: yup.string().required('Preencha o campo primeiro nome'),
  lastName: yup.string().required('Preencha o campo sobrenome'),
  responsability: yup.string().required('Selecione uma responsabilidade'),
  birthdata: yup.string().required('Adicione a data de nascimento'),
  salary: yup.string().required('Preencha o campo primeiro salário'),
})
