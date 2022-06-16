const express = require('express');
const { default: mongoose } = require('mongoose');
const Board = require('../models/BoardModel.js');
const router = express.Router();


// [GET] /b/:id
router.get('/b/:id', async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);

    if (board == null) {
      return res.status(404).json({ message: 'Cannot find Board' });
    }
    res.status(200).json({ data: board });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// [POST] /b

router.post('/b/', async (req, res) => {
  const board = new Board({
    _id:mongoose.SchemaTypes.ObjectId(),
    name: req.params.name,
    owner:req.params.userId,
    status:req.params.status,
    
  });
  try {
    await board.save();

    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// [PUT] /b/:id
router.put('/b/:id', async(req, res) => {
  const { name, owner, status } = req.params;
  const id = req.params.id
  try{
    await User.findById(id,(err,updatedBoard)=>{
      updatedBoard.name=name;
      updatedBoard.owner=owner;
      updatedBoard.status=status;
      
      await updatedBoard.save();
      res.send("updated").json(updatedBoard);
    })
  }catch(err){
    res.status(400).json({ message: err.message });
}});
