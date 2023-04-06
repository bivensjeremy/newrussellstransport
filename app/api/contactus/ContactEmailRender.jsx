import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

const ContactEmailRender = (props) => {
    const { name, subject, message, logo, email } = props;
    return (
        <Tailwind>
            <Html lang="en">
                <Preview>
                    {`Contact Us email from ${name}`}
                </Preview>
                
                <Body className="text-black pt-12">
                    <Container className="mx-auto rounded-lg">
                        <Img
                            src={`${baseUrl}/static/russelltransportlogo.png`}
                            width="100"
                            height="100"
                            alt="Russell's Transport Logo"
                            className="mx-auto"
                        />

                        <Img
                            src={`${baseUrl}/russelltransportlogo.png`}
                            width="100"
                            height="100"
                            alt="Russell's Transport Logo"
                            className="mx-auto"
                        />

                        <Img
                            src={`${baseUrl}/${logo}`}
                            width="100"
                            height="100"
                            alt="Russell's Transport Logo"
                            className="mx-auto"
                        />

                        <Img
                            src='https://www.russellstransportllc.com/_next/image?url=%2Fimages%2Frusselltransportlogo.png&w=256&q=75'
                            width="100"
                            height="100"
                            alt="Russell's Transport Logo"
                            className="mx-auto"
                        />
                        
                        <Text>
                            <span className="font-bold">From: </span>{name}
                        <br />

                            <span className="font-bold">Email: </span>
                            {email}
                        
                        <br />
                            <span className="font-bold">Subject: </span>
                            {subject}
                        </Text>

                        <Hr />

                        <Text>
                            <span className="font-bold">Message: </span>
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    );
}

export default ContactEmailRender;