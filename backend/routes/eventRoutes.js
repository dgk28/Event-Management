 
const express = require('express');
const { createEvent, getEvents, getEventById } = require('../controllers/eventController');
const router = express.Router();

router.post('/create', createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);

module.exports = router;
