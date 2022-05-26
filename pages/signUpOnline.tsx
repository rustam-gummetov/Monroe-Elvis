import {
    SignUpOnlineDiv, FormContainer, Title, Form, Text, Select,
    Option
} from "../styles/signUpOnlineStyles";

const SignUpOnline = () => {
    const services = ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4", "Услуга 5",]

    return (
        <SignUpOnlineDiv id='SignUpOnline'>
            <Title>
                Запись на услугу
            </Title>
            <Form>
                <Select>
                    <Option value="">--Выберите мастера--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
                <br></br>
                <Select>
                    <Option value="">--Выберите услугу--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
                <br></br>
                <Select>
                    <Option value="">--Выберите дату--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
                <br></br>
                <Select>
                    <Option value="">--Выберите время--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
            </Form>
        </SignUpOnlineDiv>
    )
}
export default SignUpOnline;