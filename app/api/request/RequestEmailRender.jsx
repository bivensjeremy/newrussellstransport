import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

const RequestEmailRender = (props) => {
    const { firstName, lastName, street, city, state, zip, phoneNumber, company, email, trailerType, freightGuard } = props;
    return (
        <Tailwind>
            <Html lang="en">
                <Preview>
                    {`${firstName} ${lastName} Requested Dispatch Service`}
                </Preview>

                <Body className="text-black pt-12">
                    <Container className="mx-auto rounded-lg">
                        <Heading className="font-bold mx-auto">
                            Request Dispatch Service
                        </Heading>
                        
                        <Text>
                            Name: <br/>
                            <span className="font-bold">{firstName} {lastName}</span>
                        </Text>

                        <Text>
                            Company: <br />
                            <span className="font-bold">{company}</span>
                        </Text>

                        <Text>
                            Address: <br />
                            <span className="font-bold">{street}, {city} {state}, {zip}</span>
                        </Text>

                        <Text>
                            Phone Number: <br />
                            <span className="font-bold">{phoneNumber}</span>
                        </Text>

                        <Text>
                            Email: <br />
                            <span className="font-bold">{email}</span>
                        </Text>

                        <Text>
                            What Trailer type do you need? <br />
                            <span className="font-bold">{trailerType}</span>
                        </Text>

                        <Text>
                            Do you have any freight guard reports? <br />
                            <span className="font-bold">{freightGuard}</span>
                        </Text>

                        <Hr />
                        
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    );
}

export default RequestEmailRender;