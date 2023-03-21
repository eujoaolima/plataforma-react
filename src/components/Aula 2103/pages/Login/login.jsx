import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./login.css";
import { FaGoogle } from 'react-icons/fa';

export default function Login () {
    return (
        <>
            <Row xs={1} md={2} className="g-1 mx-auto d-flex justify-content-center">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className='w-50 bg-light p-5 mx-auto mt-4'>
                            <Card.Body>
                            <Card.Title>Login</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" placeholder="E-mail" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control type="password" placeholder="Senha" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Lembre-se de mim" />
                                    </Form.Group>
                                    <Button type="submit" className="btn-custom btn-custom:hover">
                                        Fazer login
                                    </Button>

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-auto mb-0">OU</p>
                                    </div>

                                    <Button className="mb-4 w-100" size="lg" style={{
                                        backgroundColor: 'rgb(220, 220, 240)', 
                                        border: 'none', 
                                        color: '#1D1919',  
                                    }}>
                                        <FaGoogle className="mx-2"/>
                                        Continue com Google
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}