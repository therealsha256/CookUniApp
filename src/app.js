//app key: kid_ByuD0e4qu
//secret: b9794912e2294237a2a1dbd18ef79711

//Setup Sammy.js
import Recipe from './controllers/recipeCtrl';
import User from './controllers/userCtrl';
import Kinvey from './helpers/kinvey';

window.allRecipes = []; //dom data
window.msgs = []; // hold all the notification messages that are generated based on user interaction
window.msgCounter = 0;
window.formData = {}; // holds the data that the user entered into forms
window.sharedData = {}; // data that is passed to the views
window.loggedIn = false; // determines the logged in state of the user
window.db = new Kinvey('kid_ByuD0e4qu', 'b9794912e2294237a2a1dbd18ef79711');

//Initialize Sammy
const app = Sammy('#rooter', function() {
    this.use('Handlebars', 'hbs');

    const recipeCtrl = new Recipe();
    const userCtrl = new User();

    this.get('#/', recipeCtrl.getHome);
    this.get('#/user/sharerecipe', recipeCtrl.getShareRecipe);

    this.get('#/user/signup', userCtrl.getSignup);
    this.get('#/user/login', userCtrl.getLogin);

    this.post('#/registered', userCtrl.postSignup);
    this.get('#/registered', userCtrl.getSignup);

   



})
app.run('#/')