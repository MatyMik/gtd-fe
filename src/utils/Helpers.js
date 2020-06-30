export const createFormData = (email, password, confirmPassword,username, page) => {
    if (page ==='login'){
        return {
            email, 
            password
        }
    } else {
        return {
            email,
            password,
            confirmPassword,
            username
        }
    }
}