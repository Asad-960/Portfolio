import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../sending3.json';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    title: z.string().min(1, { message: "Title is required" }),
    message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof schema>;

const Contacts = () => {
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (_data: FormData) => {
        if (!form.current) return;
        setIsSending(true);

        emailjs
            .sendForm(
                "service_vpmcspg",
                "template_nzu77fp",
                form.current,
                "wKpIJ6w-VnypNx7LX"
            )
            .then(
                () => {
                    setIsSending(false);
                    setShowSuccess(true);
                    reset();
                    setTimeout(() => setShowSuccess(false), 3000);
                },
                (error) => {
                    console.log(error.text);
                    setIsSending(false);
                }
            );
    };

    return (
        <Section id="contact">
            <Container>
                <HeaderWrapper>
                    <Heading>contact-me</Heading>
                    <Line />
                </HeaderWrapper>

                <ContentWrapper>
                    <ContactInfo>
                        <h3>Let's Connect</h3>
                        <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to use the form.</p>

                        {showSuccess && (
                            <SuccessMessage>
                                <Player
                                    autoplay
                                    keepLastFrame
                                    src={animation}
                                    style={{ width: "100px", height: "100px" }}
                                />
                                <p>Message Sent Successfully!</p>
                            </SuccessMessage>
                        )}
                    </ContactInfo>

                    <FormCard ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <InputGroup>
                            <InputWrapper>
                                <Input placeholder="Name" {...register("name")} name="name" $error={!!errors.name} />
                                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                            </InputWrapper>
                            <InputWrapper>
                                <Input placeholder="Email" {...register("email")} name="email" type="email" $error={!!errors.email} />
                                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                            </InputWrapper>
                        </InputGroup>

                        <InputWrapper>
                            <Input placeholder="Title" {...register("title")} name="title" $error={!!errors.title} />
                            {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
                        </InputWrapper>

                        <InputWrapper>
                            <TextArea placeholder="Message" {...register("message")} name="message" $error={!!errors.message} />
                            {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
                        </InputWrapper>

                        <SubmitButton type="submit" disabled={isSending}>
                            {isSending ? "Sending..." : "Send Message"}
                        </SubmitButton>
                    </FormCard>
                </ContentWrapper>
            </Container>
        </Section>
    );
};

export default Contacts;

const Section = styled.section`
    background-color: ${COLORS.background};
    padding: ${rem(80)} 0;
    min-height: 80vh; 
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 ${rem(16)};
    width: 100%;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${rem(48)};
`;

const Heading = styled.h2`
    font-size: ${rem(32)};
    font-weight: ${WEIGHTS.medium};
    display: flex;
    align-items: center;
    &::before {
        content: "#";
        color: ${COLORS.primary};
        margin-right: 4px;
    }
`;

const Line = styled.div`
    content: "";
    height: 1px;
    background: ${COLORS.primary};
    width: ${rem(200)};
    margin-left: ${rem(16)};
    
    @media ${QUERIES.phoneAndBelow} {
        width: 100px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${rem(48)};
    align-items: flex-start;

    @media ${QUERIES.tabletAndBelow} {
        flex-direction: column;
        align-items: center;
    }
`;

const ContactInfo = styled.div`
    flex: 1;
    color: ${COLORS.gray};
    max-width: 500px;

    h3 {
        color: ${COLORS.white};
        font-size: ${rem(24)};
        margin-bottom: ${rem(16)};
    }
    
    p {
        line-height: 1.6;
        margin-bottom: ${rem(32)};
    }

    @media ${QUERIES.tabletAndBelow} {
        text-align: center;
        max-width: 100%;
    }
`;

const SuccessMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
    margin-top: ${rem(20)};
    animation: fadeIn 0.5s ease-in;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

const FormCard = styled.form`
    flex: 1;
    background: ${COLORS.offBlack};
    padding: ${rem(32)};
    border: 1px solid ${COLORS.gray};
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: ${rem(20)};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media ${QUERIES.phoneAndBelow} {
        padding: ${rem(20)};
    }
`;

const InputGroup = styled.div`
    display: flex;
    gap: ${rem(16)};
    
    @media ${QUERIES.phoneAndBelow} {
        flex-direction: column;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const sharedInputStyles = `
    width: 100%;
    background: transparent;
    border: 1px solid ${COLORS.gray};
    padding: ${rem(12)};
    color: ${COLORS.white};
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
        border-color: ${COLORS.primary};
        outline: none;
        box-shadow: 0 0 0 2px rgba(199, 120, 221, 0.2);
    }
    
    &::placeholder {
        color: #6e7681;
    }
`;

const Input = styled.input<{ $error?: boolean }>`
    ${sharedInputStyles}
    border-color: ${props => props.$error ? '#e06c75' : COLORS.gray};
`;

const TextArea = styled.textarea<{ $error?: boolean }>`
    ${sharedInputStyles}
    min-height: 150px;
    resize: vertical;
    border-color: ${props => props.$error ? '#e06c75' : COLORS.gray};
`;

const ErrorText = styled.span`
    color: #e06c75;
    font-size: ${rem(12)};
    margin-top: ${rem(4)};
`;

const SubmitButton = styled.button`
    padding: ${rem(12)} ${rem(24)};
    background: transparent;
    border: 1px solid ${COLORS.primary};
    color: ${COLORS.white};
    cursor: pointer;
    font-weight: ${WEIGHTS.medium};
    transition: all 0.3s ease;
    align-self: flex-start;
    margin-top: ${rem(8)};

    &:hover:not(:disabled) {
        background: rgba(199, 120, 221, 0.1);
        transform: translateY(-2px);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }

    @media ${QUERIES.phoneAndBelow} {
        width: 100%;
    }
`;