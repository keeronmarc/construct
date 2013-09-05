function Hobbit (options) {

	options = options || {};
	this.name = options.name || "weeHobbit";
	this.location = options.location || "Shire";
	this.beer = options.beer || 1;
	this.dstToCenter = options.dstToCenter || 500;
	this.toes = options.toes || 16;
	this.stories = options.stories || 4;
	this.teacups = options.teacups || 1;
	this.pipes = options.pipes || 5;

    this.shireHangout = function() {
		var storytime = this.teacups * this.stories;
		return storytime;
	}

	this.goodStory = function() {
		var words = 3000;
		var legend = (words/this.beer);
		var wordsperminute = 130;
		return Math.round(legend/wordsperminute);
	}	

	this.goodFriend = function(target) {
		if(this.goodStory() && this.shireHangout > target.goodStory() && target.shireHangout) {
			return this.name
		}
		else {
			return target.name
		}
	};

	this.walktoTown = function() {
		var speed = 5;
		var time = (this.dstToCenter/speed);
		var hello = (this.pipes * 1.25);
		var totalWalk = (hello + time)/60;
		return Math.round(totalWalk); //in hrs
	}

	this.fasterWalker = function (target) {
		if (this.walktoTown() > target.walktoTown()) {
			return this.name
		}	
		else {
			return target.name
		}
	}

} 


function animalCollection (type, size, prowess, speed) {
	this.animals = [];
	this.allPacks = [];

	this.add = function(addAnimals) {
		this.animals.push(addAnimals);
	} 
	
	this.speed = speed || 10;	
	this.type = type || 10;
	this.size = size || 10;
	this.name = name;
	this.prowess = prowess || 4;

	this.packLeader = function(type) {
		this.animals.forEach(function (animal) {
			if(animal.type === type) {
				if(animal.size > 10) {
				console.log(animal.name + " is the Pack Leader Lion")
				}
			}
		})	
	}

	this.speedcheck = function() {
		this.animals.forEach(function(currentItem, index) {
			if (currentItem.speed > 20) {
				console.log(currentItem.name + " goes pretty fast")
			}
		})
	}

	this.formPack = function(type) {
		var count = 0;
		this.animals.forEach(function(animal) {
			if(animal.type === type) {
				console.log("Step 1")
					count++; // counter - goes through
			}
		})
			if (count > 5) {
				console.log("Countdown")
				pack = {type: []};
				console.log(this)
				this.animals.forEach(function(animal) {
					if(animal.type === type) {
						pack.type.push(animal);
					}
				})
				this.allPacks.push(pack);
			}
	}

	this.bestfighter = function(prowess) {
		this.animals.forEach(function(animal1, animal2) {
			if(animal1.prowess > animal2.prowess) {
				console.log("They Win")		
			}
			else {
				console.log((animal1.prowess * 30)/(animal1.size))
				console.log("lose");
			}
		})	
	}
}

var Animalarray = new animalCollection();
Animalarray.add({type: 'Lion', prowess: 9, size:8, name: 'Harry', speed: 25})
Animalarray.add({type: 'Lion', prowess: 9, size:6, name: 'Drego', speed: 14})
Animalarray.add({type: 'Lion', prowess: 9, size:4, name: 'Pongo', speed: 11})
Animalarray.add({type: 'Lion', prowess: 9, size:3, name: 'Okkio', speed: 21})
Animalarray.add({type: 'Lion', prowess: 9, size:10, name: 'Khenu', speed: 36})
Animalarray.add({type: 'Lion', prowess: 9, size:11, name: 'Mufasa', speed: 55})
Animalarray.add({type: 'Lion', prowess: 9, size:9, name: 'Lokie', speed: 25})
Animalarray.add({type: 'Tiger', prowess: 7, size:12, name: 'Lokie1', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:12, name: 'Lokie2', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:15, name: 'Lokie3', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:13, name: 'Lokie4', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:14, name: 'Lokie5', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:14, name: 'Lokie6', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:11, name: 'Lokie7', speed: 15})
Animalarray.add({type: 'Tiger', prowess: 7, size:16, name: 'Khan', speed: 15})


function Gamer (options) {
	options = options || {};
	this.name = options.name || "Gamer";
	this.life = options.life || 100;
	this.fly = options.fly || 100;
	this.height = options.height || 10;

	this.boss = function (target) {
		var damageout = Math.floor((this.height/4) * 2);
		this.life = this.life - damageout;
		if (this.life > 0 ) {
	  		return this.life + 100;
	  	}
	  	else {
	  		"You just lost to the boss";
	  	}		
	};

    this.badGuys = function (target) {
	    var badhits = target * 10;
	    this.life = this.life - badhits;
	  	if (this.life <= 0 ) {
	  		return "you just died"
	  	}
	  	else {
	  		"move away from the bad guys";
	  	}
  	}

  	this.extrapoints = function (target) {
	    var flyhigher = this.height * 40;
	  	if (flyhigher <= 0 ) {
	  		return "gain extra points"
	  	}
	  	else {
	  		"you can't fly high enough";
	  	}
  	}

  	this.flyHigher = function (target) {
		if (this.fly > target.fly ) {
			return true;
		}	
		else {
			return false;
		}
	}

	

} 

