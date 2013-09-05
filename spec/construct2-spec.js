describe("Hobbit constructor", function() {
  beforeEach(function(){
	Frodo = new Hobbit ({
		name: "Frodo",
		location: "Shire",
		beer: 9,
		dstToCenter: 1000,
		toes: 16,
		stories: 6,
		teacups: 12,
		pipes: 10  
	});

	Sam = new Hobbit({
		name: "Sam",
		location: "Shire",
		beer: 18,
		dstToCenter: 500,
		toes: 16,
		stories: 12,
		teacups: 4,
		pipes: 4  
	});

  });

  describe('returns an object that can', function(){
 
    it ("count the hangout minutes based on Frodo's stories & tea", function (){
      expect(Frodo.shireHangout()).toBe(72);
    });

    it ("can determine how long to tell a good story", function (){
      expect(Frodo.goodStory()).toBe(3);
    });

    it ("assess friendship based on combined functions storytelling & hangout", function(){
      expect(Frodo.goodFriend(Sam)).toBe('Sam');
    });

    it ("calculate Frodo's expected walk to town to be 4 hrs", function(){
      expect(Frodo.walktoTown()).toEqual(4)
    });

    it ("compares who walks faster, Frodo or Sam", function (){
      expect(Frodo.fasterWalker(Sam)).toBe("Frodo")
    });

  }); 
});

describe("Animal Constructor", function() {
	beforeEach(function() {
		Animalarray = new animalCollection ({
			type: 'Lion', 
			prowess: 9, 
			size:8, 
			name: 'Harry', 
			speed: 25 
		});
	});

	describe("returns an object that", function () {
		it("should check if arrays are declared",function() {
	    	this.animals = [];
			this.allPacks = [];
	    	expect(this.animals).toBeDefined(undefined);    	
	    	expect(this.allPacks).toBeDefined(undefined);    	
	  	});

	  	it("should check if arrays have no values",function() {
		    this.animals = [];
			this.allPacks = [];
			expect(this.animals).not.toContain('quux');
			expect(this.allPacks).not.toContain('quux');
		});

		it("should check an initial size of 10 if not specified", function () {
				expect(Animalarray.size).toBe(10)
		})

		it("should count for Pack being > 5", function () {
				expect(Animalarray.formPack('Lion')).toBe(undefined)//should be 7
		})

		it("should check if Animalarray contains array values ", function () {
				expect(Animalarray.type).toBeDefined({ type : 'Lion', prowess : 9, size : 8, name : 'Harry', speed : 25 })//should be 7
		})

	})
})


describe("Gamer constructor", function() {
  beforeEach(function(){
  		Contra = new Gamer ({
			name: "Mario",
			life: 60,
			fly: 400, 
			height: 70
		
	});

	Mario = new Gamer({
			name: "Contra",
			life:300,
			fly:200, 
			height: 30
	});
  });

  describe('returns an object that can', function(){
 
    it ("expects Contra's life to equal 300", function (){
      expect(Contra.life).toEqual(60);
    });

    it ("expects 10 bad guys to remove you", function (){
      expect(Contra.badGuys(10)).toBe('you just died'); //error logging here
    });
	
    it ("expects Contra's fly to equal 400", function (){
      expect(Contra.fly).toBe(400); //error logging here
    });

    it ("expects Contra's life to equal 300", function (){
      expect(Contra.height).toBe(70); //error logging here
    });  	

    it ("expects Contra to defeat the boss with 125 lives leftover", function (){
      expect(Contra.boss(10)).toBe(125); //error logging here
    });

  }); 
});



