import { loginValidation, signupValidation } from "../validation";
//import {}
function isAuth() {
    if (sessionStorage.getItem('loggedIn')) {
        return true;
    } else {
        return false;
    }
}

function clearStates(viewData) {
    msgs = [];
    sharedData = {};
    viewData = {}
}

export default class User{

    getLogin(){
        //console.log('get login');
        
        const viewData = {...sharedData, loginActive: true, loggedIn: isAuth() }

        if (formData && msgs.length !== 0) {
            viewData.email ? viewData.email.input = formData.email : '';
            viewData.password ? viewData.password.input = formData.password : '';
            viewData.msgs = msgs;
        }

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/users/login.hbs', viewData).swap()
            clearStates(viewData);
        })
    }

    postLogin(){
        const {email, Password} = this.params;
        formData = {email, password};
        let Valid = loginValidation(formData);

        if (!valid){
            msgs.push({msg: 'Unsuccessful login attempt', class: 'alert danger'})
            this.redirect('/user/login');
            return;
        }
        //successfully logged in:
        msgs.push({msg: 'Logged in successfully', class: 'alert success'})
        this.redirect('/user/profile');

        db.login({ username: email, password }).then(jsonRes => {
            sessionStorage.setItem('user', jsonRes._id);
            sessionStorage.setItem('loggedIn', jsonRes._kmd.authtoken);
            msgs.push({ msg: 'Logged In successully !', class: 'alert-success' })
            sharedData.isLoading = false;
            this.redirect('#/user/profile')
        }).catch(err => {
            msgs.push({ msg: err.statusText, class: 'alert-danger' });
            sharedData.email = {}
            sharedData.email.invalid = true;
            sharedData.password = {};
            sharedData.isLoading = false;
            this.redirect('#/user/login');
        })
    }

    getSignup(){
        console.log('get signUp');
        
        let viewData = {};

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
           //notifications: '../views/partials/notifications.hbs',
            footer: '../views/partials/footer.hbs',
        }).then(function() {
            this.render('../views/users/signup.hbs', viewData).swap();
        });
    }

    postSignup(){
        console.log('registered');
//redirect
//validate form, send it to validation method (validation signup())
        const {firstName, lastName, userName, password, password2} = this.params;
        formData = {};
        formData = { firstName, lastName, userName, password, password2 }; 
      let isValid = signupValidation(formData);             //should return true/false.
      if(!isValid){
          this.redirect('#/user/signup');
          return;
        }else {
            //double check if else statement is needed here. may have to change line 96
          this.redirect('#/user/profile');
      }

      sharedData.isLoading = true;
      this.redirect('#/user/signup')
      db.signup({ username: email, password }).then(res => {
          console.log(res);
          msgs.push({ msg: 'User Created Successfully !', class: 'alert-success' })
          sharedData.isLoading = false;
          this.redirect('#/user/login');
          formData = {}
      }).catch(err => {
          if (err.status === 409) {
              msgs.push({ msg: 'User Already exists!', class: 'alert-danger' });
              sharedData.email = {}
              sharedData.email.invalid = true;
              sharedData.password = {};
              sharedData.password2 = {};
              sharedData.isLoading = false;
              this.redirect('#/user/signup');
          }
      })
        
      //create obj: serverData, populate w/data to pass to server. 
      //use kinvey signup() method, grab res, push message to messages array, 'user was created succesfully', then redirect to login page. 
      //.catch() in case of error,  push message 'invalid credentials'  redirect to user sign up. 
    }

    getLogout() {

        let token = sessionStorage.getItem('loggedIn');
        db.logout(token).then(res => {
            msgs.push({ msg: 'Logged out Successfully !', class: 'alert-success' });
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('user');
            this.redirect('#/');
        }).catch(err => {
            msgs.push({ msg: err.statusText, class: 'alert-danger' });
            this.redirect('#/');
        })
    }
 }