import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errrorActions'





class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        message: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {

            // Check for login error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ message: error.message.message })
            } else {
                this.setState({ message: null })
            }
        }
        // if authenticated, close modal   
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }


    toggle = () => {
        // Clear error
        this.props.clearErrors();
        console.log(this.state.message)

        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()

        // Get email and password from component state
        const { email, password } = this.state

        // Create a user object and set it to the state
        const user = {
            email: email,
            password: password
        }
        // Attempt Login
        this.props.login(user)
    }
    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Login
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        {this.state.message ? <Alert color="danger">
                            {this.state.message}
                        </Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>


                                <Label for="email">Email</Label>
                                <Input type="email" name="email"
                                    id="email"
                                    className="mb-3"
                                    placeholder="Email"
                                    onChange={this.onChange} />


                                <Label for="password">Password</Label>
                                <Input type="password" name="password"
                                    id="password"
                                    className="mb-3"
                                    placeholder="Password"
                                    onChange={this.onChange} />


                                <Button color="dark" style={{ marginTop: '2rem' }}
                                    block>Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})


export default connect(mapStateToProps, { login, clearErrors })(LoginModal)
