'use client'
import { useState } from "react";
import { PassionFont } from "../fonts";
import { Form, Formik } from "formik";
import { applicationValidationSchema } from "../validations";
import ApplicationPersonalInfo from "./ApplicationPersonalInfo";
import ApplicationExperience from "./ApplicationExperience";
import EmailResults from "./EmailResults";
import applicationSubmit from "../../public/transport/applicationSubmit.jpeg"
import applicationFail from "../../public/transport/applicationFail.jpeg"

const Application = () => {
    const [submitSuccess, setSuccess] = useState('')
    
    return (
        <Formik
            initialValues = {{
                firstName: '',
                lastName: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                phoneNumber:'',
                secondaryPhoneNumber: '',
                email:'',
                drivingExp: '',
                carriers: '',
                accidents: '',
                violations: '',
                referred: ''
            }}
            validationSchema={applicationValidationSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                const response = await fetch(`/api/drive`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
                const submitResults = await response.json();
                if (submitResults.status === 'Success') {
                    setSuccess('Success')
                } else if (submitResults.status === 'Fail') {
                    setSuccess('Fail')
                }
            }}>
                {({ isSubmitting }) => (
                    (function() {
                        switch (submitSuccess) {
                            case "Fail":
                                return (
                                    <EmailResults 
                                        image={applicationFail}
                                        message="Uh Oh, something went wrong. Click here to send an email to the administrator to report the problem."
                                        button="Send Email"
                                        href="mailto:admin@bivensblueprint.com?subject=Problem Sending Email | Application - Russell's Transport, LLC"
                                    />
                                );
                            case "Success":
                                return (
                                    <EmailResults
                                        image={applicationSubmit}
                                        message="Thank you for your application. We will review your qualifications and will be in touch with you."
                                        button="Return Home"
                                        href="/"
                                    />
                                )
                            default: return (
                                <Form>
                                    <div className="bg-white rounded-lg p-5">
                                        <h1 className={`${PassionFont.className} text-center text-6xl font-bold uppercase pb-3`}>
                                            Driver Application
                                        </h1>

                                        <ApplicationPersonalInfo />
                                        
                                        <ApplicationExperience />
                                        
                                        <div className="py-3 flex flex-row">
                                            <button 
                                                type="submit"
                                                className="buttonOneCSS">
                                                    {isSubmitting ? (
                                                        <div className="loadingCircle"
                                                        role="status" />
                                                    ) : ( "Submit Application" )}
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    }) ()
                )}
        </Formik>
    );
}

export default Application;