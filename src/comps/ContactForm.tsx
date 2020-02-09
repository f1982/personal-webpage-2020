import { InjectedFormikProps, withFormik } from 'formik';
import styled from 'styled-components';
import * as React from 'react';
import * as Yup from 'yup';

const FMForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const FMInput = styled.input`
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-bottom: 1rem;
`;

const FMTextarea = styled.textarea`
    width: 300px;
    height: 235px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-bottom: 1rem;
`;

const FMButton = styled.button`
    width: 300px;
    height: 35px;
    background-color: #5995ef;
    color: #fff;
    border-radius: 3px;
    &:disabled {
        background-color: #ccc;
    }
`;

interface FormValues {
    userName: string;
    email: string;
    subject: string;
    content: string;
}

interface FormProps {
    userName?: string;
    email?: string;
    subject?: string;
    content?: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = props => (
    <FMForm onSubmit={props.handleSubmit}>
        <label>Your Name</label>
        <FMInput id='userName' type='text' onChange={props.handleChange} value={props.values.userName} />
        {props.touched.userName && props.errors.userName && <div>{props.errors.userName}</div>}
        <label>Your Email</label>
        <FMInput id='email' type='text' onChange={props.handleChange} value={props.values.email} />
        {props.touched.email && props.errors.email && <div>{props.errors.email}</div>}
        <label>Your Project</label>
        <FMInput id='subject' type='text' onChange={props.handleChange} value={props.values.subject} />
        {props.touched.subject && props.errors.subject && <div>{props.errors.subject}</div>}
        <FMTextarea id='content' onChange={props.handleChange} value={props.values.content} />
        {props.touched.content && props.errors.content && <div>{props.errors.content}</div>}
        <FMButton type='submit' disabled={props.isSubmitting}>
            Submit
        </FMButton>
    </FMForm>
);

const UserSearchForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => ({ userName: 'abc', email: 'aa', subject: '', content: '' }),
    validationSchema: Yup.object().shape({
        userName: Yup.string()
            .max(16, 'Please input 16 characters or less')
            .required('Please input userName name'),
        email: Yup.string()
            .max(8, 'Pls input less than 8 characters')
            .required('pls input email'),
        subject: Yup.string()
            .min(5, 'pls input at least 4 characters')
            .max(30, 'Pls input less than 30 characters')
            .required('pls input subject'),
        content: Yup.string()
            .min(5, 'pls input at least 4 characters')
            .max(30, 'Pls input less than 30 characters')
            .required('pls input subject')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(InnerForm);

export default UserSearchForm;

// import React from 'react';
// import styled from 'styled-components';
// import * as Yup from 'yup';
// import { withFormik, FormikProps, FormikErrors, Form, Field, InjectedFormikProps } from 'formik';

// const FMForm = styled.form`
//     width: 300px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const FMInput = styled(Field)`
//     width: 300px;
//     height: 35px;
//     border: 1px solid #ccc;
//     background-color: #fff;
// `;

// const Button = styled.button`
//     width: 300px;
//     height: 35px;
//     background-color: #5995ef;
//     color: #fff;
//     border-radius: 3px;
// `;

// // Shape of form values
// interface FormValues {
//     email: string;
//     password: string;
// }

// interface OtherProps {
//     message: string;
// }

// // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
// const InnerForm: React.SFC<InjectedFormikProps<OtherProps, FormValues>> = (
//     props: OtherProps & FormikProps<FormValues>
// ) => {
//     const { touched, errors, isSubmitting, message, handleSubmit } = props;
//     return (
//         <FMForm
//             onSubmit={() => {
//                 console.log('hello world');
//                 handleSubmit();
//             }}>
//             <h1>{message}</h1>
//             <FMInput type='email' name='email' placeholder='tes' />
//             {touched.email && errors.email && <div>{errors.email}</div>}

//             <FMInput type='password' name='password' />
//             {touched.password && errors.password && <div>{errors.password}</div>}

//             <Button type='submit' disabled={isSubmitting}>
//                 Submit
//             </Button>
//         </FMForm>
//     );
// };

// // The type of props MyForm receives
// interface MyFormProps {
//     initialEmail?: string;
//     message: string; // if this passed all the way through you might do this or make a union type
// }

// // Wrap our form with the using withFormik HoC
// const MyForm = withFormik<MyFormProps, FormValues>({
//     // Transform outer props into form values
//     // 初始值
//     mapPropsToValues: props => {
//         return {
//             email: props.initialEmail || '001sd@126.com',
//             password: '111'
//         };
//     },

//     // Add a custom validation function (this can be async too!)
//     validate: (values: FormValues) => {
//         let errors = { email: '' };
//         if (!values.email) {
//             errors.email = 'Required';
//         }
//         return errors;
//     },
//     handleSubmit: (values, { setSubmitting }) => {
//         console.log('handleSubmit');
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//         }, 1000);
//     }
// })(InnerForm);

// // Use <MyForm /> wherevs
// const Basic = () => (
//     <div>
//         <h1>My App</h1>
//         <p>This can be anywhere in your application</p>
//         <MyForm message='Sign up' />
//     </div>
// );

// export default Basic;
