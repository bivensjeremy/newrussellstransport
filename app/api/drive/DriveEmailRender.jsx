import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

const DriveEmailRender = (props) => {
    const { firstName, lastName, street, city, state, zip, phoneNumber, secondaryPhoneNumber, email, drivingExp, carriers, accidents, violations, referred } = props;
    return (
        <Tailwind>
            <Html lang="en">
                <Preview>
                    {`${firstName} ${lastName} Submitted an Application!`}
                </Preview>

                <Body className="text-black pt-12">
                    <Container className="mx-auto rounded-lg">
                        <Heading className="font-bold">
                            Drive For Us Application
                        </Heading>
                        
                        <Text>
                            Applicant Name: <br/>
                            <span className="font-bold">{firstName} {lastName}</span>
                        </Text>

                        <Text>
                            Address: <br />
                            <span className="font-bold">{street} {city} {state}, {zip}</span>
                        </Text>

                        <Text>
                            Phone Number: <br />
                            <span className="font-bold">{phoneNumber}</span>
                        </Text>

                        <Text>
                            Secondary Number: <br />
                            <span className="font-bold">{secondaryPhoneNumber}</span>
                        </Text>

                        <Text>
                            Email: <br />
                            <span className="font-bold">{email}</span>
                        </Text>

                        <Text>
                            How much driving experience have you had? <br />
                            <span className="font-bold">{drivingExp}</span>
                        </Text>

                        <Text>
                            How many carriers have you worked for in the last 3 years?  <br />
                            <span className="font-bold">{carriers}</span>
                        </Text>

                        <Text>
                            How many accidents have you been in during the last 12 months? <br />
                            <span className="font-bold">{accidents}</span>
                        </Text>
                            
                        <Text>
                            How many violations have you been cited for in the last 12 months?<br />
                            <span className="font-bold">{violations}</span>
                        </Text>
                        
                        <Text>
                            Were you referred by anyone?<br />
                            <span className="font-bold">{referred}</span>
                        </Text>

                        <Hr />
                        
                    </Container>
                </Body>
            
        </Html>
        </Tailwind>
    );
}

export default DriveEmailRender;