var helpers = {

};

helpers.setRandom = function(min,max){
	return Math.floor(Math.random()*max) +min;
}

function viking(name, health, strength){
	this.name = name || "viking" + helpers.setRadom(0,10000),
	this.health = health || helpers.setRandom(20,30),
	this.strength = strength || helpers.setRandom(6,8),
	this.block = helpers.setRandom(6,10),
	this.dodge = helpers.setRandom(6, 8)
}

viking.prototype.hit = function (){
	var hitDamage = helpers.setRandom(Math.floor(this.strength/2), this.strength);
	if(this.weapon){
		hitDamage += this.weapon.attackBonus;

	}
	enemy.reciveDamage(hitDamage);//le paso al enemy el recibe daño
}

viking.prototype.reciveDamage = function(damage){
	var blockBonus = this.weapon ?/*separa bloques*/ this.weapon.blockBonus : 0;//if this.weapon else this.weapon.blockBonus = 0
	var block = (this.block + blockBonus) > helpers.setRandom(1,100);
	var dodge = this.dodge > helpers.setRandom(1,100);
	if(!block && !dodge){
		this.health -= damage;
	}
}

function Saxon(){
	this.health = helpers.setRandom(8,12),
	this.strength = helpers.setRandom(2,3),
	this.block = helpers.setRandom(1,3),
	this.dodge = helpers.setRandom(0,5)
}


Saxon.prototype = viking.prototype;

function pit(viking1, viking2, turns){
	this.viking1 = viking1,
	this.viking2 = viking2,
	this.turns = turns
}

pit.prototype.fight = function(){
	var minHealth = 7;
	while(this.turns > 0 && this.viking1.health > minHealth && this.viking2 > minHealth){
		this.viking1.hit(this.viking2);
		this.viking2.hit(this.viking1);
		this.turns--
}

this.winner = this.viking1.health > this.viking2.health ? this.viking1 : this.viking2;//si la salud del viking1 es mayor que la del vikingo,ENTONCES gana el viking1,SINO gana el viking2

}

pit.prototype.showWinner = function(){
	if(this.winner){
		console.log("And the winner is: " + this.winner.name);
	}
}

/*var v1 = new viking("Ragnar", helpers.setRandom(20,30), helpers.setRandom(6,8));
var v2 = new viking("Lagherta", helpers.setRandom(20,30), helpers.setRandom(6,8));
var pit = new pit(v1,v2,5);

pit.fight();
pit.showWinner();*/

function War(vikingArmy,saxonArmy, turns){
	this.vikingArmy = vikingArmy,
	this.saxonArmy = saxonArmy,
	this.turns = turns
}


War.prototype.killThemAll = function (){
	var viking, saxon, i=0;
	var self = this;//bloqueo al this y llamo solo a uno de los objetos que me interesa,no a todos los que tengan this.
	var armiesAlive = true;

	while(i<this.turns && armiesAlive){
	this.vikingArmy.forEach(function(viking){
		saxon = self.saxonArmy[helpers.setRandom(0,self.saxonArmy - 1)];
		viking.hit(saxon);
	})
	this.saxonArmy.forEach(function(saxon){
		viking = self.vikingArmy[helpers.setRandom(0, self.vikingArmy - 1)];
		saxon.hit(viking);
	})

	this.saxonArmy = this.saxonArmy.filter(function(saxon){
		return saxon.health > 0;//filtrame en el equipo saxon y devuelveme la salud del saxon que sea mayor a 0
	})

	this.vikingArmy = this.vikingArmy.filter(function(viking){
		return viking.health > 0;
	})

	animesAlive = this.vikingArmy.length > 0 && this.saxonArmy.length > 0;
	i ++;
}

this.winner = vikingArmy > this.saxonArmy ? "Vikings" : "Saxons";
this.turns = i;

}

War.prototype.showWinner = function(){
	console.log("The winner is: " + this.winner);
	console.log("vikings" + this.vikingArmy.length);
	console.log("saxons" + this.saxonArmy.length);
	console.log("Turns" + this.turns);
}

function weapon(name, attackBonus, blockBonus){
	this.name = name,
	this.attackBonus = attackBonus,
	this.blockBonus = blockBonus
}

saxonWeapons = [new weapon("staff",1,0), new weapon("Hammer",2,0), new weapon("escudo",0,5)];
vikingWeapons = [new weapon ("jacha",5,1), new weapon("Desodorante Axe",5,5), new weapon("Iron staff",4,0)];

function createArmy(UnitType, number, weapon){
	var army = [], unit;
	for (var i = 0; i < number; i++){
		unit = new UnitType();//le paso el unit para guardar todo lo que le paso a los objetos de vikings y saxon
		unit.weapo = weapons[helpers.setRandom(0,weapons.length - 1)];
		aarmy.push(unit)
	}
	return army;
}

var vikingArmy = createArmy(viking, 280 , vikingWeapons);
var saxonArmy = createArmy(saxon, 680, saxonWeapons);

var war = new War (vikingArmy, saxonArmy, 50);

war.killThemAll();
war.showWinner();






