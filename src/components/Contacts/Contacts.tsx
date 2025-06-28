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
    message: z.string().min(1, { message: "Message is required"}),
});

type FormData = z.infer<typeof schema>;

const Contacts = () => {
    const [isSending, setIsSending] = useState(false);
    const [showPlane, setShowPlane] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = async (_data: FormData) => {
        if (!form.current) return;
        setIsSending(true);
        setShowPlane(true);
        setTimeout(() => {
            setShowPlane(false);
        }, 2000);
        emailjs
            .sendForm(
                "service_ijayvfm",
                "template_nzu77fp",
                form.current,
                "wKpIJ6w-VnypNx7LX"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSending(false);
                    form.current?.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <Header id="contact">
                <Heading>contact-me</Heading>
                <Line />
            </Header>
            <Wrapper>
                <Lightning src="/assests/lightning.svg" />
                <FormWrapper ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <RowOne>
                        <div>
                        <RowOneInput placeholder="Name" {...register("name")} name="name"/>
                        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                        </div>
                        <div>
                        <RowOneInput placeholder="Email" {...register("email")} name="email" type="email" />
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

                        </div>
                    </RowOne>
                    <RowTwo>
                        <Title placeholder="Title" {...register("title")} name="title" />
                        {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
                    </RowTwo>
                    <RowThree>
                        <Description placeholder="Message" {...register("message")} name="message" />
                        {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
                    </RowThree>
                    <SendButton type="submit" disabled={isSending}>Send</SendButton>
                </FormWrapper>
                <Sending>
                    {
                        showPlane &&
                        <Player
                            autoplay
                            loop
                            src={animation}
                            style={{ width: "30%", height: "30%" }}
                        />
                    }
                </Sending>
            </Wrapper>
        </>

    )
};

export default Contacts;

const Wrapper = styled.div`
    background-color: ${COLORS.black};
    padding-top: ${rem(52)};
    display: flex;
    gap: ${rem(166)};
    position: relative;
    justify-content: center;
    height: 600px;    
    padding-left: ${rem(130)};
`;

const ErrorText = styled.p`
    color: #e43;
    /* color: ${COLORS.primary}; */
    font-size: ${rem(14)};
    padding-top: ${rem(4)};
`
const Header = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    align-items: center;
    padding-top: ${rem(52)};
`;
const Heading = styled.p`
    font-size: ${rem(32)};
    font-weight: ${WEIGHTS.medium};
    &::before{
        content: "#";
        color: ${COLORS.primary};
    }
`;
const Line = styled.div`
    /* border: 1px solid ${COLORS.primary}; */
    width: ${rem(211)};
    background: ${COLORS.primary};
    height: 1px;
    margin-left: ${rem(16)};
    @media ${QUERIES.phoneAndBelow}
    {
        width: ${rem(111)};
    }
`;

const Input = styled.input`
    padding: ${rem(8)};
    border: 1px solid ${COLORS.gray};
    background: none;
    color: ${COLORS.gray};

    &::placeholder{
        color: ${COLORS.gray};
    }
`;
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    position: relative;
    z-index: 1;
`;
const RowOne = styled.div`
    display: flex;
`;
const RowOneInput = styled(Input)
`
    height: 37px;
    width: ${rem(247 * 1.5)};
    margin-right: 16px;

    @media ${QUERIES.phoneAndBelow}{
        width: ${rem(234.8)};
    }
`;
const RowTwo = styled.div`

`;
const Title = styled(Input)
    `
    height: 37px;
    width: ${rem(505 * 1.5)};
    @media ${QUERIES.phoneAndBelow}{
        width: ${rem(485.89)};
    }
`;
const RowThree = styled.div`
    
`;
const Description = styled.textarea
    `
    padding: ${rem(8)};
    border: 1px solid ${COLORS.gray};
    background: none;
    color: ${COLORS.gray};
    height: 219px;
    width: ${rem(505 * 1.5)};

    &::placeholder{
        color: ${COLORS.gray};
    }
    @media ${QUERIES.phoneAndBelow}{
        width: ${rem(485.89)};
    }
`;

const SendButton = styled.button`
    width: ${rem(71)};
    background: none;
    border: none;
    padding: ${rem(8)} ${rem(16)};
    color: ${COLORS.white};
    border: 1px solid ${COLORS.primary};
    cursor: pointer;
`;

const Sending = styled.div`
    position: absolute;
`;

const Lightning = styled.img`
    position: absolute;
    top: ${rem(0)};
    left: ${rem(-300)};
    width: 700px;
    z-index: 0;
    height: 500px;
    @media (${QUERIES.phoneAndBelow})
    {
        display: none;
    }
    @media (${QUERIES.tabletOnly})
    {
        transform: scale(0.8);
    }
`;