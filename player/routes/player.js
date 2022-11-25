const router = require('express').Router();
const player = require('../models/playermodel');


router.post('/add', async (req, res) => {
  const {name, email, password} = req.body;
  console.log(req.body);
  try {
    const createPlayer = await new player({name, email, password});
    await createPlayer.save((err)=>{
      console.log('saved');
    });
    console.log('player has been saved ', createPlayer);
  } catch (err) {
    console.log(err);
    return res.status(400).json({status: 'FAILURE', error: err})
  }
  return res.status(200).json({status: 'SUCCESS', msg: 'Player details has been saved'});
});

router.get('/all', async (req, res) =>{
  let allPlayers;
  try {
    allPlayers = await contact.find();
  } catch(err) {
    console.log(err);
    return res.status(400).json({status: 'FAILURE', error: err});
  }
  return res.status(200).json({status: 'SUCCESS', Players: allPlayers});
});

router.put('/update/:id', async (req, res) => {
  const {id: _id} = req.params;
  const {name, email, password} = req.body;
  try {
    const updateData = await player.updateOne({_id: _id},{name, email, password});
  } catch (err) {
    console.log(err);
    return res.status(400).json({status: 'FAILURE', error: err});
  }
  return res.status(200).json({status: 'SUCCESS', msg: 'data has been updated'});
});

router.delete('/delete/:id', async (req, res) => {
  const {id: _id} = req.params;
  try{
    const deletePlayer = await player.deleteOne({_id: _id});
  } catch (err) {
    console.log(err);
    return res.status(400).json({status: 'FAILURE', error: err});
  }
  return res.status(200).json({status: 'SUCCESS', msg: 'player has been deleted'});
});

module.exports = router;