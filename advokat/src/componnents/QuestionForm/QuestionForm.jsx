import React, { useRef } from 'react'
import "./QuestionForm.css"
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, selectForm } from '../../store/formSlices/formSlices';
import DatePicer from '../DatePicer/DatePicer';
import { redFill, selectContent } from '../../store/contentSlices/contentSlices';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function QuestionForm() {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const { click } = useSelector(selectContent)
    const form = useSelector(selectForm)
    console.log(form);

    const validationSchema = Yup.object({
        name: Yup.string().required('Անվան դաշտը դատարկ է'),
        email: Yup.string().email('Սխալ email գրելաձև').required('Email դաշտը դատարկ է'),
        username: Yup.string().required('Ազգանվան դաշտը դատարկ է'),
    });

    return (
        <div className='questionForm'>
            <div className="container">
                <div className='answer'>
                    <p> Any Questions ? </p>
                    <h1> Frequently Asked Questions </h1>
                    {
                        click.map(el => (
                            <div key={el.id} onClick={() => dispatch(redFill(el.id))} className='quen'>
                                <span>{el.a} <hr style={{ width: "100%" }} /></span>
                                {el.case ? <span>{el.aTwo}</span> : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="questions">
                    <p>Schedule For</p>
                    <h1>Free Consultation</h1>
                    <Formik
                        initialValues={{ name: '', email: '', username: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            dispatch(addSearch({
                                id: new Date().getTime().toString(),
                                name: values.name,
                                email: values.email,
                                username: values.username,
                                date: ref.current[3].value,
                                textarea: ref.current[4].value
                            }))
                            console.log(ref);
                            resetForm()
                            ref.current[4].value = ""
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form ref={ref}>

                                <div className='inp1'>
                                    <div className='er-h'>
                                        <Field type="text" placeholder='Your Name...' name="name" />
                                        <span>

                                            <ErrorMessage className='err-mes' name="name" />
                                        </span>
                                    </div>

                                    <div className='er-h' >
                                        <Field type="text" placeholder="Your user name..." name="username" />
                                        <span>
                                            <ErrorMessage className='err-mes' name="username" />

                                        </span>
                                    </div>
                                </div>

                                <div className='inp1'>
                                    <div className='er-h'>

                                        <Field placeholder='Email..' type="email" name="email" />
                                        <span><ErrorMessage className='err-mes' name="email" /></span>

                                    </div>
                                    <div className='er-h1'>
                                        <DatePicer />
                                    </div>
                                </div>

                                <div className="inp3">
                                    <textarea id="myTextarea" placeholder="Ներկայացրեք Ձեր խնդիրը..." name="myTextarea"></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting}>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default QuestionForm