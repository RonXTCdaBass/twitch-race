const alien_red = document.getElementById('alien_red');
const alien_blue = document.getElementById('alien_blue');
const alien_green = document.getElementById('alien_green');
const alien_yellow = document.getElementById('alien_yellow');
const alien_purple = document.getElementById('alien_purple');
const alien_black = document.getElementById('alien_black');
const alien_white = document.getElementById('alien_white');

const params = new URLSearchParams(window.location.search);
const channel = params.get('') || 'ronxtcdabass';
const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: [channel],
});


client.connect();

let count_red = 0;
let count_blue = 0;
let count_green = 0;
let count_yellow = 0;
let count_purple = 0;
let count_black = 0;
let count_white = 0;
        
client.on('message', (channel, tags, message, self) => {
    if (self) return true;
    if (message === '!red') {
        count_red += 10;
        alien_red.style.left = count_red + 'px';
    } 
    if (message === '!blue') {
        count_blue += 10;
        alien_blue.style.left = count_blue + 'px';
    }
	if (message === '!green') {
        count_green += 10;
        alien_green.style.left = count_green + 'px';
    }
	if (message === '!yellow') {
        count_yellow += 10;
        alien_yellow.style.left = count_yellow + 'px';
    }
	if (message === '!purple') {
        count_purple += 10;
        alien_purple.style.left = count_purple + 'px';
    }
	if (message === '!black') {
        count_black += 10;
        alien_black.style.left = count_black + 'px';
    }
	if (message === '!white') {
        count_white += 10;
        alien_white.style.left = count_white + 'px';
    }
	
const finish_point = screen.width - 100;

	if (count_red >= finish_point) {
    alert('RED is winner');
	}
	if (count_blue >= finish_point) {
    alert('BLUE is winner');
	}
	if (count_green >= finish_point) {
    alert('GREEN is winner');
	}
	if (count_yellow >= finish_point) {
    alert('YELLOW is winner');
	}
	if (count_purple >= finish_point) {
    alert('PURPLE is winner');
	}
	if (count_black >= finish_point) {
    alert('BLACK is winner');
	}
	if (count_white >= finish_point) {
    alert('WHITE is winner');
	}

// reset
if (count_red >= finish_point || count_blue >= finish_point || count_green >= finish_point || count_yellow >= finish_point || count_purple >= finish_point || count_black >= finish_point || count_white >= finish_point) {
    count_red = 0;
	count_blue = 0;
	count_green = 0;
	count_yellow = 0;
	count_purple = 0;
	count_black = 0;
	count_white = 0;
	alien_red.style.left = count_red + 'px';
	alien_blue.style.left = count_blue + 'px';
	alien_green.style.left = count_green + 'px';
	alien_yellow.style.left = count_yellow + 'px';
	alien_purple.style.left = count_purple + 'px';
	alien_black.style.left = count_black + 'px';
	alien_white.style.left = count_white + 'px';
}
	
});
