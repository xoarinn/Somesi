const ExpressRouter = require('express').Router;
const controllers = require('./controllers');
const mid = require('./middleware.js');

const account = controllers.account;
const dashboard = controllers.dashboard;
const splash = controllers.splash;
const router = ExpressRouter();

// TODO - Middleware

router.all('/', mid.requiresNoAccount, splash.renderSplashPage);

router.all('/logout', mid.requiresAccount, account.logOut);
router.get('/signup', mid.requiresNoAccount, account.renderSignUpPage);
router.get('/login', mid.requiresNoAccount, account.renderLogInPage);
router.get('/get-csrf-token', account.getToken);

router.get('/dashboard', mid.requiresAccount, dashboard.renderDashboard);

router.post('/login', account.logIn);
router.post('/signup', account.signUp);

module.exports = router;
