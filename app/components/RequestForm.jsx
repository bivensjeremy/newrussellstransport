'use client'
import { InputField, SelectField } from "./FormInput";
import { useState } from "react";
import { Form, Formik } from "formik";
import { requestServiceValidationSchema } from "../validations";
import Link from "next/link";
import { Download } from "lucide-react";
import SubmitSuccess from '../../public/transport/SubmitSuccess.jpeg'
import SubmitFail from '../../public/transport/SubmitFail.jpeg'
import EmailResults from "./EmailResults";

const RequestForm = () => {
    const [submitSuccess, setSuccess] = useState('')
    
    return (
        <Formik
            initialValues = {{
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                phoneNumber:'',
                street: '',
                city: '',
                state: '',
                zip: '',
                trailerType: '',
                freightGuard: '',
            }}
            validationSchema={requestServiceValidationSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                const response = await fetch(`/api/request`, {
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
                        case "Success":
                            return <EmailResults 
                                image={SubmitSuccess}
                                message='Your request has been submitted. We will follow up with you with next steps!'
                                button='Return Home'
                                href='/'
                            />
                        case "Fail":
                            return (
                                <EmailResults
                                    image={SubmitFail}
                                    message="Something went wrong. Please contact us directly to report and request service"
                                    button="Email Us"
                                    href="mailto:admin@bivensblueprint.com?subject=Manual Email | Contact Us - Russell's Transport, LLC"
                                />
                            )
                        default: return(
                            <Form>
                                <div className="bg-white rounded-lg p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-1">
                                        <InputField label="firstName" placeholder="First Name" />
                                        <InputField label="lastName" placeholder="Last Name" />
                                    </div>

                                    <div className="grid grid-cols-1 md:gap-2 pb-1">
                                        <InputField label="companyName" placeholder="Company Name" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-1">
                                        <InputField label="phoneNumber" placeholder="Phone Number" />
                                        <InputField label="email" placeholder="Email Address" text='email' />
                                    </div>

                                    <div className="grid grid-cols-1 md:gap-2">
                                        <InputField label="street" placeholder="Street Address" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pb-2">
                                        <InputField label="city" placeholder="City" />
                                        <InputField label="state" placeholder="State" />
                                        <InputField label="zip" placeholder="Zip Code" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pb-3">
                                        <SelectField 
                                            label="trailerType" 
                                            placeholder="Select Trailer Type"
                                            options={[
                                                "Dry Van",
                                                "Flatbed",
                                                "Step Deck",
                                                "Reefer",
                                                "Other"
                                            ]}
                                        />

                                        <SelectField 
                                            label="freightGuard" 
                                            placeholder="Do You Have Any Freight Guard Reports?"
                                            options={[
                                                "Yes",
                                                "No",
                                            ]}
                                        />

                                        <div className="text-center">
                                            <h3 className="text-lg font-bold">Download Carrier Agreement</h3>
                                            <Link href="/docs/OB&T Dispatching Service Dispatch and Carrier Agreement2.pdf">
                                                <button type="button" className="buttonOneCSS flex m-auto gap-2">
                                                    <Download size={18} />
                                                    Download
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="py-3 flex flex-row">
                                        <button 
                                            type="submit"
                                            className="buttonOneCSS">
                                                {isSubmitting ? (
                                                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
                                                    role="status" />
                                                ) : ( "Submit Request" )}
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

export default RequestForm;