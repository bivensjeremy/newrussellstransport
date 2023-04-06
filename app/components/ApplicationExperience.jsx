import { InputField, SelectField } from "./FormInput";

const ApplicationExperience = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold" >
                Tell Us About Your Experience
            </h2>
            <hr className="mb-1 p-0.5 rounded-full bg-[#252525]" />

                <SelectField 
                    fullWidth
                    label="drivingExp"
                    placeholder="How much driving experience have you had?"
                    options={[
                        "None",
                        "Less than 6 months",
                        "Less than 1 year",
                        "Between 1-3 years",
                        "More than 3 years"
                    ]}>
                </SelectField>

                <SelectField 
                    fullWidth
                    select
                    label="carriers"
                    placeholder="How many carriers have you worked for in the last 3 years?"
                    options={[
                        "None",
                        "1",
                        "2",
                        "3",
                        "4",
                        "More than 4"
                    ]}>
                </SelectField>

                <SelectField 
                    fullWidth
                    select
                    label="accidents"
                    placeholder="How many accidents have you been in during the last 12 months?"
                    options={[
                        "None",
                        "1",
                        "2",
                        "3",
                        "4",
                        "More than 4"
                    ]}>
                </SelectField>

                <SelectField 
                    fullWidth
                    select
                    label="violations"
                    placeholder="How many violations have you been cited for in the last 12 months?"
                    options={[
                        "None",
                        "1",
                        "2",
                        "3",
                        "4",
                        "More than 4"
                    ]}>
                </SelectField>

            <div>
                <InputField label="referred" placeholder="Were you referred by anyone? If so, who?" />
            </div>
        </div>
    );
}

export default ApplicationExperience;