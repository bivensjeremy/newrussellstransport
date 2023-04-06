import { InputField } from "./FormInput";

const ApplicationPersonalInfo = () => {
    return (
        <div>
            <div>
            <h2 className="text-2xl font-bold">
                    Personal Information
                </h2>
                <hr className="mb-1 p-0.5 rounded-full bg-[#252525]" />
            
                <div className="grid grid-cols-2 md:gap-2 pb-3">
                    <InputField label="firstName" placeholder="First Name" />
                    <InputField label="lastName" placeholder="Last Name" />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mt-2">
                    Address Information
                </h2>
            
                <div className="grid grid-cols-1 md:gap-2">
                    <InputField label="street" placeholder="Street Address" />
                </div>

                <div className="grid grid-cols-3 md:gap-2">
                    <InputField label="city" placeholder="City" />
                    <InputField label="state" placeholder="State" />
                    <InputField label="zip" placeholder="Zip Code" />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mt-2">
                    Contact Information
                </h2>
                
                <div className="grid grid-cols-2 md:gap-2">
                    <InputField label="phoneNumber" placeholder="Phone Number" />
                    <InputField label="secondaryPhoneNumber" placeholder="Secondary Phone Number" />
                </div>

                <div className="grid grid-cols-1 md:gap-2 pb-3">
                    <InputField label="email" placeholder="Email Address" text='email' />
                </div>
            </div>
        </div>
    );
}

export default ApplicationPersonalInfo;