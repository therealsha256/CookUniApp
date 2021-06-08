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
export const signupValidation = ({firstName, lastName, userName, password, password2}) => {
    loginValidation({ userName, password });
    sharedData.password2 = {};

    if (!password2) {
        msgs.push({ msg: 'Confirmed Password Field is required', class: 'alert-danger' })
        sharedData.password2.invalid = true;
    } else if (!validator.equals(password, password2)) {
        msgs.push({ msg: 'Password not matching', class: 'alert-danger' })
        sharedData.password2.invalid = true;
    } else {
        sharedData.password2.valid = true;
    }

    let isValid = msgs.length === 0;
    return isValid;

}
export const createValidation = ({email, password}) => {
    if (!category) {
        sharedData.category = { invalid: true, valid: false, msg: 'Provide category Information' };
    } else {
        sharedData.maker = { valid: true, invalid: false };
    }

       if (!meal) {
        sharedData.meal = { invalid: true, valid: false, msg: 'Provide meal information' };
    } else if (!validator.isInt(meal, { min: 1, max: 45 })) {
        sharedData.meal = { invalid: true, valid: false, msg: 'Meal information should be 1-45 characters long' };
    } else {
        sharedData.meal = { valid: true, invalid: false }
    }


    if (!ingredients) {
        sharedData.ingredients = { invalid: true, valid: false, msg: 'Provide Ingredients Description' };
    } else if (!validator.isLength(desc, { min: 3 })) {
        sharedData.ingredients = { invalid: true, valid: false, msg: 'Description should be at least 3 characters' };
    } else {
        sharedData.ingredients = { valid: true, invalid: false };
    }


    if (!prepMethod) {
        sharedData.prepMethod = { invalid: true, valid: false, msg: 'Provide prep-method' };
    } else if (!validator.isLength(desc, { min: 3 })) {
        sharedData.prepMethod = { invalid: true, valid: false, msg: 'Invalid entry, method should be at least 3 characters long' };
    } else {
        sharedData.prepMethod = { valid: true, invalid: false }
    }

    if (!description) {
        sharedData.description = { invalid: true, valid: false, msg: 'Please Provide a Description' };
    } else if (!validator.isLength(desc, { min: 3 })) {
        sharedData.description = { invalid: true, valid: false, msg: 'Description should be at least 3 characters' };
    } else {
        sharedData.description = { valid: true, invalid: false };
    }

    if (!imageUrl) {
        sharedData.imageUrl = { invalid: true, valid: false, msg: 'Provide ImageUrl' }
    } else {
        sharedData.imageUrl = { valid: true, invalid: false }
    }

    if (sharedData.category.invalid ||
        sharedData.meal.invalid ||
        sharedData.ingredients.invalid ||
        sharedData.prepMethod.invalid ||
        sharedData.description.invalid ||
        sharedData.imageUrl.invalid) {
        msgs.push({ msg: 'Check your input', class: 'alert-danger' })
    }

    let isValid = msgs.length === 0;
    return isValid;

}
