const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    maxhp: {
        type: Number,
        required: true
    },
    minhp: {
        type: Number,
        required: true
    },
    maxdefese: {
        type: Number,
        required: true
    },
    mindefese: {
        type: Number,
        required: true
    },
    maxatack: {
        type: Number,
        required: true
    },
    minatack: {
        type: Number,
        required: true
    },
    maxespecial: {
        type: Number,
        required: true
    },
    minespecial: {
        type: Number,
        required: true
    },
    lore: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('Cards', CardSchema);