import * as Yup from "yup"

export const applicationValidationSchema = Yup.object({
    firstName: Yup.string().required('Invalid Input'),
    lastName: Yup.string().required('Invalid Input'),
    street: Yup.string().required('Invalid Input'),
    city: Yup.string().required('Invalid Input'),
    state: Yup.string().required('Invalid Input'),
    zip: Yup.string().required('Invalid Input'),
    phoneNumber: Yup.number().required('Invalid Input'),
    secondaryPhoneNumber: Yup.number().required('Invalid Input'),
    email: Yup.string().email('Invalid email').required('Required'),
    drivingExp: Yup.string().required('Invalid Input'),
    carriers: Yup.string().required('Invalid Input'),
    accidents: Yup.string().required('Invalid Input'),
    violations: Yup.string().required('Invalid Input')
});

export const requestServiceValidationSchema = Yup.object({
    firstName: Yup.string().required('Invalid Input'),
    lastName: Yup.string().required('Invalid Input'),
    street: Yup.string().required('Invalid Input'),
    city: Yup.string().required('Invalid Input'),
    state: Yup.string().required('Invalid Input'),
    zip: Yup.string().required('Invalid Input'),
    phoneNumber: Yup.number().required('Invalid Input'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const contactValidationSchema = Yup.object({
    name: Yup.string().required('Invalid Input'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string().required('Invalid Input'),
    message: Yup.string().required('Invalid Input'),
});