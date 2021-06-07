//grab validation form from alfred
//export here


export const loginValidation = ({email, password}) => {

    shareData = { email: {}, password: {}};

    if(!email){
        msgs.push({msg:'Email field is required', class: 'alert danger'})
        shareData.email.invalid = true;

    }else if(!validator.isEmail(email)){
        msgs.push({msg: 'Email format isinvalid', class: 'alert danger'})
        shareData.email.invalid = true;

    }else {
        shareData.email.valid = true;
    }

    if(!password){
        msgs.push({msg:'Password field is required', class: 'alert danger', el: 'password'})
        shareData.password.invalid = true;
    }else if(!validator.isLength(password, {min: 6, max: 15})){
        msgs.push({msg: 'Password should be 6-15 characters', class: 'alert danger', el: 'password'})
        shareData.password.invalid = true;
    }else {
        shareData.password.valid = true;
    }

    let isValid = msgs.length === 0;
    return isValid;

}
export const signupValidatio = ({email, password, password2}) => {

}
export const signupValidation = ({email, password}) => {

}
