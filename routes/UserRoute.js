const express = require('express');
const User = require('../models/UserModel');
const router = express.Router();

// [GET] /user/:id
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find User' });
    }
    res.status(200).json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// [POST] /user

router.post('/user/', async (req, res) => {
  const user = new User({
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    email: req.params.email,
    password: req.params.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// [PUT] /user/:id
router.put('/user/:id', async(req, res) => {
  const { firstName, lastName, email, password } = req.params;
  const id = req.params.id
  try{
    await User.findById(id,(err,updatedUser)=>{
      updatedUser.firstName=firstName;
      updatedUser.lastName=lastName;
      updatedUser.email=email;
      updatedUser.password=password;
      await updatedUser.save();
      res.send("updated");
    })
  }catch(err){
    res.status(400).json({ message: err.message });
}});
