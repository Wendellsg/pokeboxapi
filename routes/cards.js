const express = require('express')
const router = express.Router();
const Card = require('../models/Card')

router.get('/', async (req, res)=>{
    try{
        const cards = await Card.find();
        res.json(cards)
    }catch(err){
        res.json({message: err})
    }
});

router.post('/', async (req, res)=>{
    const card = new Card({

        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
        maxhp: req.body.maxhp,
        minhp: req.body.minhp,
        maxdefese: req.body.maxdefese,
        mindefese: req.body.mindefese,
        maxatack: req.body.maxatack,
        minatack: req.body.minatack,
        maxespecial: req.body.maxespecial,
        minespecial: req.body.minespecial,
        lore: req.body.lore,
    });

    try{
    const savedCard = await card.save();
    res.json(savedCard);
    }catch(err){
        res.json({message: err})
    }
});

router.get('/:cardName',async (req, res)=>{
    try{
        const card = await Card.find({name: req.params.cardName});
            res.json(card);
    }catch(err){
        res.json({message: err});
    }
})

router.delete('/:carName', async(req, res)=>{
    try{
    const removedCard = await Card.remove({name: req.params.cardName});
    res.json(removedCard);
    }catch(err){
        res.json({message: err});
    }
});


router.patch('/:cardName', async (req, res)=>{
    try{
    const updatedCard = await Card.updateOne({name: req.params.cardName},{$set:{
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
        maxhp: req.body.maxhp,
        minhp: req.body.minhp,
        maxdefese: req.body.maxdefese,
        mindefese: req.body.mindefese,
        maxatack: req.body.maxatack,
        minatack: req.body.minatack,
        maxespecial: req.body.maxespecial,
        minespecial: req.body.minespecial,
        lore: req.body.lore,
    }})
    res.json(updatedCard);

    }catch(err){
        res.json({message: err});
    
    }
})



module.exports =router;