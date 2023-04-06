import { ErrorMessage, Field } from "formik";

export const InputField = ({ label, placeholder, text }) => {
    return (
        <div>
            <Field 
                as="input"
                type={text} 
                id={label}
                name={label}
                className="inputStyle" 
                placeholder={placeholder}
            />
            <ErrorMessage name={label} render={msg => <div className="text-xs text-red-500 italic">{msg}</div>} />
        </div>
    );
}

export const SelectField = ({ label, options, placeholder }) => {
    return (
        <div>
            <Field 
                as="select"
                name={label}
                className="inputStyle text-neutral-400">
                    <option defaultValue>{placeholder}</option>
                {options.map((option) => (
                    <option 
                        key={option} 
                        value={option}>{option}</option>
                ))}
            </Field>
            <ErrorMessage name={label} render={msg => <div className="text-xs text-red-500 italic">{msg}</div>} />
        </div>
    );
}

export const TextArea = ({ label, placeholder }) => {
    return(
        <div>
            <Field
                as="textarea"
                id={label}
                name={label}
                rows="10"
                className="inputStyle"
                placeholder={placeholder}
            />
            <ErrorMessage name={label} render={msg => <div className="text-xs text-red-500 italic">{msg}</div>} />
        </div>
        
    )
}