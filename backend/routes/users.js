const router = require('express').Router();
const bcrypt = require('bcryptjs');
let User = require('../models/user.model');