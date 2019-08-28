const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/User.Model');
const Company = require('../models/Company.Model')

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`
    }
})

authRoutes.post('/signup', (req, res, next) => {
    const { username, lastname, password, email, city, creditCard, photo, chatToken, plans } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Por favor introduce usuario y contraseña' });
        return;
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Por seguridad la contraseña debe tener al menos 7 caracteres .' });
        return;
    }

    User.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "Username check went bad." });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Nombre de usuario ya existe, elija otra.' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({
            username: username,
            lastname: lastname,
            password: hashPass,
            email: email,
            city: city,
            creditCard: creditCard,
            photo: photo,
            chatToken: chatToken,
            plans: plans

        });

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.', err });
                return;
            }
            transporter.sendMail({
                from: '"Disfruton App" <process.env.EMAIL>',
                to: email,
                subject: 'Gracias por registrarte en Disfruton App',
                text: 'Mensaje de bienvenida',
                html:  `<h2>Ya eres parte de la página con los mejores planes</h2>
                <p>You can start sharing your favourites worlds locations with the other user and discover
                where can you go in your next travel, what can you do there and why have to go, the triple 'W' + I do.</p>
                <p>Thank you for your registration and enjoy!</p>
                <img src=https://res.cloudinary.com/dpkvkfi5u/image/upload/v1564399013/wIdo-gallery/logo-wIdo.png.png>`
            })
            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});

authRoutes.post('/signup/company', (req, res, next) => {
    const { username, companyName, password, email, city, vatNumber, chatToken, plans } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Por favor introduce usuario y contraseña' });
        return;
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Por seguridad la contraseña debe tener al menos 7 caracteres .' });
        return;
    }

    Company.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "Username check went bad." });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Nombre de usuario ya existe, elija otra.' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new Company({
            username: username,
            companyName: companyName,
            password: hashPass,
            email: email,
            city: city,
            vatNumber: vatNumber,
            chatToken: chatToken,
            plans: plans

        });

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.', err });
                return;
            }

            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});


authRoutes.post('/login',  (req, res, next) => {
    passport.authenticate('user-local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

authRoutes.post('/login/company', (req, res, next) => {
    passport.authenticate('company-local', (err, theUser, failureDetails) => {
        console.log(theUser)
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;