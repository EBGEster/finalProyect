const User = require('../models/User.Model');
const Company = require('../models/Company.Model')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');


passport.serializeUser((obj, done) => {

    if (obj instanceof User) {
      done(null, { id: obj._id, type: 'User' });
    } else {
      done(null, { id: obj._id, type: 'Company' });
    }
  });
  
  passport.deserializeUser((obj, cb) => {
    if (obj.type === 'User') {
      User.findById(obj.id, (err, userDocument) => {
                if (err) {
                    cb(err);
                    return;
                }
                cb(null, userDocument);
            });
    } else {
    Company.findById(obj.id, (err, userDocument) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, userDocument);
    });
    }
  });

// passport.serializeUser((loggedInUser, cb) => cb(null, loggedInUser._id))

// passport.deserializeUser((userIdFromSession, cb) => {
//     User.findById(userIdFromSession, (err, userDocument) => {
//         if (err) {
//             cb(err);
//             return;
//         }
//         cb(null, userDocument);
//     });
// });

passport.use('user-local', new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
        if (err) {
            next(err);
            return;
        }

        if (!foundUser) {
            next(null, false, { message: 'Usuario no registrado.' });
            return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            next(null, false, { message: 'Contraseña incorrecta.' });
            return;
        }

        next(null, foundUser);
    });
}));

passport.use('company-local', new LocalStrategy((username, password, next) => {
    Company.findOne({ username }, (err, foundUser) => {
        if (err) {
            next(err);
            return;
        }

        if (!foundUser) {
            next(null, false, { message: 'Usuario no registrado.' });
            return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            next(null, false, { message: 'Contraseña incorrecta.' });
            return;
        }

        next(null, foundUser);
    });
}));