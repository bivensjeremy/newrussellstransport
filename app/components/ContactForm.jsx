'use client'
import { Form, Formik } from "formik";
import { useState } from "react";
import { contactValidationSchema } from "../validations";
import { InputField, SelectField, TextArea } from "./FormInput";
import EmailResults from "./EmailResults";
import SuccessPickup from "../../public/transport/SuccessPickup.jpeg"
import FailPickup from "../../public/transport/FailPickup.jpeg"


const ContactForm = () => {
    const [submitSuccess, setSuccess] = useState('');
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: ''
            }}
            validationSchema={contactValidationSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                const response = await fetch(`/api/contactus`, {
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
                                    image={FailPickup}
                                    message="Uh Oh, something went wrong. Please click here to sent an email to the administrator."
                                    button="Send Email"
                                    href="mailto:admin@bivensblueprint.com?subject=Manual Email | Contact Us - Russell's Transport, LLC"
                                />)
                        case "Success":
                            return (
                                <EmailResults 
                                    image={SuccessPickup}
                                    message="Thank you for your message. Click here to return home."
                                    button="Home"
                                    href="/"
                                />)
                        default: return (
                            <Form>
                                <div className="bg-white rounded-lg p-5">
                                    <div className="grid grid-cols-2 gap-2 pb-1">
                                        <InputField label="name" placeholder="Your Name" />
                                        <InputField label="email" placeholder="Email Address" text='email' />
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 pb-1">
                                        <SelectField 
                                            label="subject" 
                                            placeholder="Subject"
                                            options={[
                                                "Request Shipping Quote",
                                                "Inquire About Dispatching Service",
                                                "Join Our Team",
                                                "Other"
                                            ]}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 pb-1">
                                        <TextArea
                                            label="message"
                                            placeholder="Message" 
                                        />
                                    </div>

                                    <div className="py-3 flex flex-row">
                                        <button 
                                            type="submit"
                                            className="buttonOneCSS">
                                                {isSubmitting ? (
                                                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
                                                    role="status" />
                                                ) : ( "Send" )}
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

export default ContactForm;