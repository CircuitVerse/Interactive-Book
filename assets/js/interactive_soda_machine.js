var soda_machine_fsm = {
  //constants
  NUM_STATES: 9,
  //numeric variables
  state: 0,
  inputs: 0,
  nexts: null,
  output: null,
  //object pointers
  paper: null,
  fsm_circles: null,
  fsm_arrows: null,
  outputText: null,
  stateText: null,
  inputsText: null,
  nextText: null,
  waitText: null,
  //functions
  initialize: null,
  flashState: null,
  flashArrow: null,
  convertDecToBinText: null,
  updateWaitCounter: null,
  update: null,
};

soda_machine_fsm.next = [[0,1,3], [2,1,1], [2,3,5], [4,3,3], [4,5,6], [8,5,5], [7,6,6], [8,8,8], [0,0,0]];
soda_machine_fsm.output = [['none',6, 'M0'],['none',6, 'W5'],['none',6, 'M5'],['none',6, 'W10'],['none',6, 'M10'],
							['none',6, 'W15'],['none',6, 'W20'],['change',6, 'M20'],['soda',6, 'M15'] ];

soda_machine_fsm.flashState = function(counter) {
  if (counter%2 == 0) {
    soda_machine_fsm.fsm_circles[soda_machine_fsm.state].attr('fill','red');
  } else {
    soda_machine_fsm.fsm_circles[soda_machine_fsm.state].attr('fill','white');
  }
  counter--;
  if (counter > 0) {
    setTimeout(function() {
	  soda_machine_fsm.flashState(counter);
	 }, 240);
  }
}

soda_machine_fsm.flashArrow = function(curr,next){
  arrow = soda_machine_fsm.fsm_arrows[curr][next];
  arrow.attr('stroke', 'red');
  setTimeout(function() {
    arrow.attr('stroke', 'black');
  }, 750);
}

soda_machine_fsm.updateWaitCounter = function(input) {
  soda_machine_fsm.waitText.attr('text',input.toString() );
  if (input > 0) {
    setTimeout(function() {
	  soda_machine_fsm.updateWaitCounter(input-1);
	},166);
  }
}

soda_machine_fsm.updateInputs = function(input) {
  soda_machine_fsm.inputs = input;
}

soda_machine_fsm.update = function() {

  with(soda_machine_fsm) {
    flashArrow(state, next[state][inputs]);
	state = next[state][inputs];
  }
  setTimeout(function() {
    switch (soda_machine_fsm.state) {
	case 0:
      soda_machine_graphics.clearCoins();
	  break;
    case 2: case 4:
	  break;
	case 7:
      soda_machine_graphics.dropChange();
	  break;
	case 8:
      soda_machine_graphics.dropSoda();
	  break;
	}

    with(soda_machine_fsm) {
      flashState(output[state][1]);
	  //stateText.attr('text', output[state][2]);
	 // outputText.attr('text', output[state][0]);
	 // nextText.attr('text', output[next[state][inputs]][2]);
	  //updateWaitCounter(output[state][1]*1.25);
    }
  }, 1000);
  setTimeout(soda_machine_fsm.update,soda_machine_fsm.output[soda_machine_fsm.state][1]*250+1000);
}

soda_machine_fsm.initialize = function() {
  soda_machine_fsm.paper = Raphael("soda_machine_fsm_canvas",800,300);
  with(soda_machine_fsm){
    paper.setViewBox(0,-25,950,400,0);
	fsm_circles = new Array();
	fsm_arrows = new Array();
	for (i=0;i<NUM_STATES;i++){
	  fsm_arrows[i] = new Array();
	}
	buttons = new Array();
	for(i=0;i<2;i++){
	  buttons[i] = new Array();
	  buttons[i][2] = 0;
	}


	//Circles
	fsm_circles[0] = paper.circle(75,110,50).attr({'stroke-width':'2'});
	fsm_circles[1] = paper.circle(275,110,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[2] = paper.circle(475,110,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[3] = paper.circle(675,110,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[4] = paper.circle(875,110,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[5] = paper.circle(875,260,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[6] = paper.circle(575,260,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[7] = paper.circle(375,260,50).attr({'stroke-width':'2', 'fill':'white'});
	fsm_circles[8] = paper.circle(175,260,50).attr({'stroke-width':'2', 'fill':'white'});

	//arrows
	fsm_arrows[0][3] = paper.path("M110.35,74.65 q264.65,-150,529.3,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[0][1] = paper.path("M118.3,85 q56.7,-20,113.4,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[1][2] = paper.path("M318.3,85 q56.7,-20,113.4,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[2][3] = paper.path("M518.3,85 q56.7,-20,113.4,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[2][5] = paper.path("M510.35,145.35 q150,55,329.29,79.29").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[3][4] = paper.path("M718.3,85 q56.7,-20,113.4,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[4][5] = paper.path("M875,160 l0,50").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[4][6] = paper.path("M839.64,145.36 q-110,55,-229.29,79.29").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[5][8] = paper.path("M839.65,295.35 q-314.65,100,-629.29,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[6][7] = paper.path("M531.7,235 q-56.7,-20,-113.4,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[7][8] = paper.path("M331.7,235 q-56.7,-20,-113.4,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[8][0] = paper.path("M139.64,224.64 q-50,-22,-64.64,-64.64").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[0][0] = paper.path("M50,66.7 a10,15,0,0,1,50,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[1][1] = paper.path("M250,66.7 a10,15,0,0,1,50,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[2][2] = paper.path("M450,66.7 a10,15,0,0,1,50,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[3][3] = paper.path("M650,66.7 a10,15,0,0,1,50,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[4][4] = paper.path("M850,66.7 a10,15,0,0,1,50,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[5][5] = paper.path("M918.3,235 a10,15,90,0,1,0,50").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});
	fsm_arrows[6][6] = paper.path("M550,216.7 a10,15,0,0,1,50,0").attr({'stroke-width':'2', 'arrow-end': 'classic-wide-long'});

	//Labels in circles
	paper.text(75,85,'M0').attr({'font-size':'20'});
	paper.text(275,85,'W0').attr({'font-size':'20'});
	paper.text(475,85,'M5').attr({'font-size':'20'});
	paper.text(675,85,'W10').attr({'font-size':'20'});
	paper.text(875,85,'M10').attr({'font-size':'20'});
	paper.text(875,235,'W15').attr({'font-size':'20'});
	paper.text(575,235,'W20').attr({'font-size':'20'});
	paper.text(375,235,'M20').attr({'font-size':'20'});
	paper.text(175,235,'M15').attr({'font-size':'20'});
	paper.path("M35,100 l80,0").attr({'stroke-width':'2'});
	paper.path("M235,100 l80,0").attr({'stroke-width':'2'});
	paper.path("M435,100 l80,0").attr({'stroke-width':'2'});
	paper.path("M635,100 l80,0").attr({'stroke-width':'2'});
	paper.path("M835,100 l80,0").attr({'stroke-width':'2'});
	paper.path("M135,250 l80,0").attr({'stroke-width':'2'});
	paper.path("M335,250 l80,0").attr({'stroke-width':'2'});
	paper.path("M535,250 l80,0").attr({'stroke-width':'2'});
	paper.path("M835,250 l80,0").attr({'stroke-width':'2'});
	paper.text(75,120,'20').attr({'font-size':'20'});
	paper.text(275,120,'20').attr({'font-size':'20'});
	paper.text(475,120,'20').attr({'font-size':'20'});
	paper.text(675,120,'20').attr({'font-size':'20'});
	paper.text(875,120,'20').attr({'font-size':'20'});
	paper.text(175,270,'20').attr({'font-size':'20'});
	paper.text(375,270,'20').attr({'font-size':'20'});
	paper.text(575,270,'20').attr({'font-size':'20'});
	paper.text(875,270,'20').attr({'font-size':'20'});
	paper.text(75,140,'none').attr({'font-size':'20'});
	paper.text(275,140,'none').attr({'font-size':'20'});
	paper.text(475,140,'none').attr({'font-size':'20'});
	paper.text(675,140,'none').attr({'font-size':'20'});
	paper.text(875,140,'none').attr({'font-size':'20'});
	paper.text(875,290,'none').attr({'font-size':'20'});
	paper.text(575,290,'none').attr({'font-size':'20'});
	paper.text(375,290,'change').attr({'font-size':'20'});
	paper.text(175,290,'soda').attr({'font-size':'20'});

	//Arrow Labels
	paper.text(175,60,'01').attr({'font-size':'20', 'fill': '#777'});
	paper.text(375,60,'00').attr({'font-size':'20', 'fill': '#777'});
	paper.text(575,60,'01').attr({'font-size':'20', 'fill': '#777'});
	paper.text(775,60,'00').attr({'font-size':'20', 'fill': '#777'});
	paper.text(375,-15,'10').attr({'font-size':'20', 'fill': '#777'});
	paper.text(95,30,'00').attr({'font-size':'20','text-anchor': 'start', 'fill': '#777'});
	paper.text(295,30,'01,10').attr({'font-size':'20','text-anchor': 'start', 'fill': '#777'});
	paper.text(495,30,'00').attr({'font-size':'20','text-anchor': 'start', 'fill': '#777'});
	paper.text(695,30,'01,10').attr({'font-size':'20','text-anchor': 'start', 'fill': '#777'});
	paper.text(895,30,'00').attr({'font-size':'20','text-anchor': 'start', 'fill': '#777'});
	paper.text(575,150,'10').attr({'font-size':'20', 'fill': '#777'});
	paper.text(775,155,'10').attr({'font-size':'20', 'fill': '#777'});
	paper.text(900,185,'01').attr({'font-size':'20', 'fill': '#777'});
	paper.text(950,220,'01,10').attr({'font-size':'20', 'fill': '#777'});
	paper.text(525,330,'00').attr({'font-size':'20', 'fill': '#777'});
	paper.text(525,185,'01,10').attr({'font-size':'20', 'fill': '#777'});
	paper.text(475,210,'00').attr({'font-size':'20', 'fill': '#777'});
	paper.text(275,210,'00,01,10').attr({'font-size':'20', 'fill': '#777'});
	paper.text(130,180,'00,01,10').attr({'font-size':'20', 'fill': '#777'});

	update();
  }
}

var soda_machine_graphics = {
  // variables
  button_status: null,
  num_dropped_coins: null,
  // object pointers
  paper: null,
  buttons: null,
  coins_change: null,
  coins: null,
  lids: null,
  cover: null,
  sodas: null,
  sensorText: null,
  // functions
  initialize: null,
  updateButton: null,
  dropChange: null,
  dropSoda: null,
  create5Coin: null,
  create10Coin: null,
  createSoda: null,
  enableButtons: null,
  clearCoins: null,
}

soda_machine_graphics.initialize = function () {
  soda_machine_graphics.paper = Raphael("soda_machine_graphics_canvas",550,300);
  with(soda_machine_graphics){
    paper.setViewBox(0,40,650,350,false);
	buttons = new Array();
	lights = new Array();
	coins_change = new Array();
	coins = new Array();
	lights_glow = new Array();
	lids = new Array();
	sodas = new Array();
	button_status = 0;
    num_dropped_coins = 0;
	for(i=0;i<2;i++){
	  buttons[i] = new Array();
	  buttons[i][2] = 0;
	}

	//sensor buttons
	buttons[0][0] = paper.rect(350,40,75,30).attr({'fill':'#FFC'});
	buttons[0][1] = paper.text(387.5,55,'Drop 5\xA2').attr({'font-size':'16'});
	paper.rect(350,40,75,30).attr({'fill':'#FFC', 'opacity': '0'}).click(function () {dropCoin(5);});
	buttons[1][0] = paper.rect(450,40,75,30).attr({'fill':'#FFC'});
	buttons[1][1] = paper.text(487.5,55,'Drop 10\xA2').attr({'font-size':'16'});
	paper.rect(450,40,75,30).attr({'fill':'#FFC', 'opacity': '0'}).click(function () {dropCoin(10);});

	for (i=0;i<4;i++) {
	  coins_change[i] = create5Coin(152.5,225);
	  coins_change[i].transform(['t','0',-55*i]);
	}

	for (i=0;i<5;i++) {
	  sodas[i] = createSoda(278,225);
	  sodas[i].transform(['t','0',-35*i]);
	}

	cover = paper.rect(10,0,320,79).attr({'stroke': 'none', 'fill':'#DDD'});

	//soda machine box
	paper.path("M10,80 l400,0 l0,250 l55,0 l0,-250 l145,0 l0,300 l-600,0 Z").attr({'stroke-width': '2'});
	paper.rect(466,115,100,50).attr({'stroke-width': '2', 'fill':'#DDD'});
	paper.path("M100,320 l0,10 l 100,0 l0,-10").attr({'stroke-width': '2'});
	paper.path("M250,320 l0,10 l 100,0 l0,-10").attr({'stroke-width': '2'});
	paper.path("M125,80 l0,170 ").attr({'stroke-width': '2'});
	paper.path("M180,80 l0,170 ").attr({'stroke-width': '2'});
	paper.path("M275,80 l0,170 ").attr({'stroke-width': '2'});
	paper.path("M330,80 l0,170 ").attr({'stroke-width': '2'});
	paper.text(505,140,'Sensor:').attr({'font-size': '20'});
	sensorText = paper.text(550,140,'00').attr({'font-size': '20'});

	//lids
	lids[0] = paper.path("M123,253 , l60,0 ").attr({'stroke-width': '2'});
	lids[1] = paper.path("M273,253 , l60,0 ").attr({'stroke-width': '2'});
	lids[2] = paper.path("M412,163 , l50,0 ").attr({'stroke-width': '2'});


  }

  var svg = document.querySelector("svg");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
}


soda_machine_graphics.clearCoins = function(input) {
  if (soda_machine_graphics.num_dropped_coins == 0) {
    return;
  }
  with (soda_machine_graphics) {
    for (i=0;i<num_dropped_coins;i++) {
	  coins[i].animate({opacity:'0'},500);
	}
  }
  setTimeout( function () {
	with (soda_machine_graphics) {
      for (i=0;i<num_dropped_coins;i++) {
	    coins[i].remove();
	  }
	  num_dropped_coins = 0;
       enableButtons();
    }
  } , 500 );
}
soda_machine_graphics.enableButtons = function(input) {
  for (i=0;i<2;i++) {
    for (j=0;j<2;j++) {
	  soda_machine_graphics.buttons[i][j].animate({opacity:'1'},0);
	}
  }
  soda_machine_graphics.button_status = 0;
}

soda_machine_graphics.dropCoin = function(input) {
  if (soda_machine_graphics.button_status != 0) {
    return;
  }
  soda_machine_graphics.button_status = 1;
  for (i=0;i<2;i++) {
    for (j=0;j<2;j++) {
	  soda_machine_graphics.buttons[i][j].animate({opacity:'0'},0);
	}
  }
  with(soda_machine_graphics){
    if (input == 5) {
      coins[num_dropped_coins] = create5Coin(437.5,50);
	  sensorText.attr('text','01');
	  soda_machine_fsm.updateInputs(1);
	} else {
	  coins[num_dropped_coins] = create10Coin(437.5,50);
	  sensorText.attr('text','10');
	  soda_machine_fsm.updateInputs(2);
	}
	coins[num_dropped_coins].animate({transform: ['t','0','85']},85/70*500);
  }

  setTimeout (function () {
    soda_machine_graphics.lids[2].animate({transform: "t-65,0"},300);
  }, 2200);
  setTimeout (function () {
    with (soda_machine_graphics) {
	  soda_machine_graphics.sensorText.attr('text','00');
	  soda_machine_fsm.updateInputs(0);
      coins[num_dropped_coins].animate({transform: ['t','0',85+(3-num_dropped_coins)*55]},(3-num_dropped_coins)*55/75*500);
	  num_dropped_coins++;
	}
  }, 2600);
  setTimeout (function () {
    soda_machine_graphics.lids[2].animate({transform: "t0,0"},300);
  }, 3000);
  setTimeout (function () {
	if (soda_machine_fsm.state <= 4) {
      soda_machine_graphics.enableButtons();
    }
  }, 3300);

}

soda_machine_graphics.create5Coin = function (x0,y0) {
  set = soda_machine_graphics.paper.set();
  set.push(
    soda_machine_graphics.paper.circle(x0,y0,25).attr({'stroke-width': '2', 'fill': '#DDD'}),
    soda_machine_graphics.paper.text(x0,y0,'5 \xA2').attr({'font-size': '24'})
  );
  return set;
}

soda_machine_graphics.create10Coin = function (x0,y0) {
  set = soda_machine_graphics.paper.set();
  set.push(
    soda_machine_graphics.paper.circle(x0,y0,25).attr({'stroke-width': '2', 'fill': '#DDD'}),
    soda_machine_graphics.paper.text(x0,y0,'10 \xA2').attr({'font-size': '24'})
  );
  return set;
};

soda_machine_graphics.createSoda = function (x0,y0) {
  return soda_machine_graphics.paper.image("/assets/images/SodaCan.jpg",x0,y0,50,30);
};

soda_machine_graphics.dropChange = function () {
  var dropedChange = soda_machine_graphics.coins_change[0];
  for (i=0;i<3;i++){
    soda_machine_graphics.coins_change[i] = soda_machine_graphics.coins_change[i+1];
  }

  soda_machine_graphics.lids[0].animate({transform: "t-65,0"},300);

  setTimeout(function () {
    dropedChange.animate({transform: "t0,75"},500);
    with(soda_machine_graphics) {
      coins_change[3] = create5Coin(152.5,225).transform("t0,-220 ");
	  cover.toFront();
	  for (i=0;i<4;i++) {
        coins_change[i].animate({transform: ['t','0',-i*55]},366);
	  }
    }
  }, 400 );

  setTimeout(function () {
    soda_machine_graphics.lids[0].animate({transform: "T0,0"},300);
  }, 800 );

  setTimeout(function () {
    dropedChange.animate({'opacity': '0'},500);
  }, 2000 );

  setTimeout(function () {
    dropedChange.remove();
  }, 2500 );
}

soda_machine_graphics.dropSoda = function () {
  var dropedSoda = soda_machine_graphics.sodas[0];
  for (i=0;i<4;i++){
    soda_machine_graphics.sodas[i] = soda_machine_graphics.sodas[i+1];
  }

  soda_machine_graphics.lids[1].animate({transform: "t-65,0"},300);

  setTimeout(function () {
    dropedSoda.animate({transform: "t0,75"},500);
    with(soda_machine_graphics) {
      sodas[4] = createSoda(278,225).transform("t0,-175 ");
	  cover.toFront();
	  for (i=0;i<5;i++) {
        sodas[i].animate({transform: ['t','0',-i*35]},366);
	  }
    }
  }, 400 );

  setTimeout(function () {
    soda_machine_graphics.lids[1].animate({transform: "T0,0"},300);
  }, 800 );

  setTimeout(function () {
    dropedSoda.animate({'opacity': '0'},500);
  }, 2000 );

  setTimeout(function () {
    dropedSoda.remove();
  }, 2500 );
}

$(function () {
  soda_machine_fsm.initialize();
  soda_machine_graphics.initialize();
});
