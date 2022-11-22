import React from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, 'Invalid Name!')
    .required('Name is required!'),
  email: Yup.string().email('Invalid Email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(6, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password dose not match!',
  ),
});

const SignUpForm = () => {
  const userInfo = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // const [error, setError] = useState('');

  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({...userInfo, [fieldName]: value});
  // };
  // const isValidForm = () => {
  //   if (!isValidObjField(userInfo)) {
  //     return updateError('Required all fields!', setError);
  //   }
  //   if (!fullName.trim() || fullName.length < 3) {
  //     return updateError('Invalid Name!', setError);
  //   }
  //   if (!isValidEmail(email)) {
  //     return updateError('Invalid Email!', setError);
  //   }
  //   if (!password.trim() || password.length < 6) {
  //     return updateError('Password is less then 6 characters!', setError);
  //   }
  //   if (password !== confirmPassword) {
  //     return updateError('Password does not match!', setError);
  //   }
  //   return true;
  // };
  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onsubmit={(values, formikActions) => {
          setTimeout(() => {
            formikActions.resetForm();
            formikActions.setSubmitting(false);
          }, 3000);
        }}>
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <>
              <FormInput
                value={values.fullName}
                error={touched.fullName && errors.fullName}
                onBlur={handleBlur('fullName')}
                onChangeText={handleChange('fullName')}
                placeholder="John Smith"
                label="Full Name"
              />
              <FormInput
                value={values.email}
                error={touched.email && errors.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                placeholder="example@gmail.com"
                label="email"
              />
              <FormInput
                value={values.password}
                error={touched.password && errors.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                autoCapitalize="none"
                placeholder="********"
                label="Password"
                secureTextEntry={true}
              />
              <FormInput
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur('confirmPassword')}
                onChangeText={handleChange('confirmPassword')}
                autoCapitalize="none"
                placeholder="********"
                label="Confirm Password"
                secureTextEntry={true}
              />
              <FormSubmitBtn
                title="Sign Up"
                submitting={isSubmitting}
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default SignUpForm;
