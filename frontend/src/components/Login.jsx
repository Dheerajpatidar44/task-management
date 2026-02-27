import React from "react";
import { Form, Container,Row, Col, Button } from "react-bootstrap";
import axios from '../api/axios'

export default function Login() {

    const [Username, setUsername] = React.useState("");
    const [Password, setPassword] = React.useState("");

    function handleLogin(){
        try{
            const res = await axios.post('./auth/admin-login', { username, password })
        }
    }
	return (
		<div>
			<Container style={{ marginTop: 20 }}>
				<Row>
					<Col md={6}>
						<Form>
							<Form.Group
								
							>
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" onChange={(e) => }/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								
							>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" rows={3} />
							</Form.Group>
                            <Button onClick={}>Login</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
