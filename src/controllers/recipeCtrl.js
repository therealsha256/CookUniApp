export default class Recipe{

    getHome(){
        console.log('home');
        
        let viewData = {};

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
           //notifications: '../views/partials/notifications.hbs',
            footer: '../views/partials/footer.hbs',
        }).then(function() {
            this.render('../views/app/home.hbs', viewData).swap();
        });
    }
    getShareRecipe(){
        // console.log('home');
        
        let viewData = {};

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
           //notifications: '../views/partials/notifications.hbs',
            footer: '../views/partials/footer.hbs',
        }).then(function() {
            this.render('../views/app/shareRecipe.hbs', viewData).swap();
        });
    }
}