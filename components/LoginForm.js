import React from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = () => {
  const navigation = useNavigation();
  const userInfo = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email!').required('Email is required!'),
    password: Yup.string()
      .trim()
      .min(6, 'Password is too short!')
      .required('Password is required!'),
  });

  // const {email, password} = userInfo;
  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({...userInfo, [fieldName]: value});
  // };
  // const [error, setError] = useState('');

  // const isValidForm = () => {
  //   if (!isValidObjField(userInfo)) {
  //     return updateError('Required all fields!', setError);
  //   }
  //   if (!isValidEmail(email)) {
  //     return updateError('Invalid Email!', setError);
  //   }
  //   if (!password.trim() || password.length < 6) {
  //     return updateError('Password is less then 6 characters!', setError);
  //   } else {
  //     return true;
  //   }
  // };

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={data => {
          AsyncStorage.setItem('login', data.email);
          console.log(JSON.parse(JSON.stringify(data.email)));
          navigation.navigate('DashBoard');
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
                value={values.email}
                error={touched.email && errors.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                placeholder="example@gmail.com"
                label="Email"
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
              <FormSubmitBtn title="Login" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
