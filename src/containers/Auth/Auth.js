// contains the login/signup page
import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button"
import "./Auth.css"
import {login,signup} from "../../store/actions"
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {createFormData} from "../../utils/Helpers"

const Auth = props => {
    const inputFields = {
        email: {
            type: "email",
            name: "email",
            labelText: "Email",
            pages: ["login","signup"]
        },
        password: {
            type: "password",
            name: "password",
            labelText: "Password",
            pages: ["login", "signup"]
        },
        confirmPassword: {
            type: "password",
            name: "confirmPassword",
            labelText: "Confirm Password",
            pages: ["signup"]
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loaded, setLoaded] = useState(false)

    const history = useHistory();
    const {page} = useParams();

    useEffect(() => {
        if(props.isAuthenticated){
            history.push("/")
        }
    },[])
    useEffect(()=>{
        //the redirects after login and after signup
        if(loaded === true && props.loading === false && props.isAuthenticated){
            if(page==='login'){
                history.push("/")
            } else {
                history.push("/auth/login")
            }
        }
        
    },[props, page])
    const buttonAttributes = {
        type: 'submit',
        className: 'AuthButton',
        loginTitle: "Login",
        signupTitle: "Signup"
    }

    const onHandleInput = (inputValue, inputType) => {
        if(inputType === "email") {
            setEmail(inputValue);
        } else  if(inputType === "password") {
            setPassword(inputValue);
        } else if (inputType==="confirmPassword") {
            setConfirmPassword(inputValue)
        } else {
            return false;
        }
    }

    const onFormSubmitted = (event) => {
        event.preventDefault();
        const userData = createFormData(email, password, confirmPassword, page);
        if (page ==='login'){
            props.onLogin(userData)
        } else {
            props.onSignup(userData)
        }
        setLoaded(true)
    }

    const onSwitchLoginSignupHandler = () => {
        if(page==='login'){
            history.push('/auth/signup')
        } else {
            history.push('/auth/login')
        }
    }

    const inputs = Object.keys(inputFields).map(key => {
        const inputItem = inputFields[key];
        if(inputItem.pages.includes(page)){
            return (
                <Input 
                cssClass = 'InputContainer'
                    type = {inputItem.type}
                    labelText = {inputItem.labelText}
                    name = {inputItem.name}
                    key = {key}
                    changed = {event => onHandleInput(event.target.value, event.target.name)}
                />
            )
        } else {
            return null;
        }
    })
    const switchText = page === 'login' ? "Not registered yet? " : "Already registered?"
    const switchLinkText = page === 'login' ? "Sign up here " : "Login here"

    const btnTitle = page === 'login' ? buttonAttributes.loginTitle : buttonAttributes.signupTitle;
    const inputOrSpinner = props.loading ? <Spinner /> : inputs;
    return (
        <div className = "AuthContainer">
            <div className = "ImageContainer">
                <img src = "https://cala.ca/wp-content/uploads/2019/07/cala-news-getting-things-done.jpg" alt = ""/>
            </div>
            <div className = "AuthFormContainer">
                <div>
                {inputOrSpinner}
                </div>
                <div className= "ButtonContainer">
                    <Button
                    type = {buttonAttributes.type}
                    title = {btnTitle}
                    btnClass = {buttonAttributes.className}
                    clicked = {event => onFormSubmitted(event)}/>
                    <div className = "SwitchText">
                        {switchText} <span onClick={onSwitchLoginSignupHandler}>{switchLinkText}</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: userData => dispatch(login(userData)),
        onSignup: userData => dispatch(signup(userData)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);