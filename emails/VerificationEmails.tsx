import {Html, Head, Font, Preview, Heading, Row, Section, Text, Button} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({username, otp}: VerificationEmailProps){
    return (
        <Html>
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    // webFont={{url:'https"//fonts.gstatic.com/s/roboto/v27/'}}
                    fontWeight={""}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Here&apos;s Your Verification Code : {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>Thank you for registering, Please use the following verification code to complete your registration</Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>If you did not request this code, please ignore this email.</Text>
                </Row>
            </Section>
        </Html>
    )
}