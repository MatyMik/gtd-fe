import { useEffect } from "react";
import { connect } from "react-redux";
import {logoutHandler} from "../../store/actions"

const logout = props => {

    useEffect(()=> {
        props.logout(props.userId)
    },[])
    return(
    null
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: userId => dispatch(logoutHandler(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(logout)