import React,{Fragment} from "react"
import {connect} from "react-redux"
import {useHistory} from "react-router-dom"

const IsAuth = props => {

    const history =  useHistory();
    const component = props.isAuthenticated ? props.children : null;

    if(!props.isAuthenticated) {
        history.push("/auth/login");
    }
    return (
        <Fragment>
            {component}
        </Fragment>
        
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(IsAuth);