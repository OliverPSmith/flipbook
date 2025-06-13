
// Canvas elements
const drawCanvas = document.getElementById('drawCanvas');
const flipBookCanvas = document.getElementById('flipbookCanvas');

// Canvas contexts
const ctx = drawCanvas.getContext('2d');
const flipCtx = flipBookCanvas.getContext('2d');

// Button eventListeners
const addBtn = document.getElementById('addBtn');
const playBtn = document.getElementById('playBtn');
const clearBtn = document.getElementById('clearBtn');

// Gallery container
const gallery= document.getElementById('gallery');