// var peopleObject = require("../data/friends");
// var people = peopleObject.data

var people = require("../data/friends");
var fs = require ("fs");

console.log(people)

module.exports = function(app){
//return full list of people
	app.get('/api/friends', function(req,res){
		res.json(people)
	})

//return the best match
	app.post('/api/friends', function(req,res){
		var newPerson = req.body;
			var newScore = newPerson.scores;
			var bestMatch;
//set score larger than biggest possible difference
			var score = 80 ;

			console.log(newPerson)

//check if there is anybody else in the array
		if(people.length === 0){
			people.push(newPerson);
			console.log(people);
			// peopleObject.data = people;
			// console.log(peopleObject)
			res.send( '0' )
		}else{

	//loop through all person in people array
			for (var i = 0; i < people.length; i++) {
				var exst = people[i].scores;
				var diff = 0;
			
				//console.log(exst[0] + parseInt(newScore[0]))
			//calculate the differnece of all questions
				for (var j = 0; j < exst.length; j++) {

					if ( diff < score){
						diff += Math.abs(exst[j] - parseInt(newScore[j]))
						console.log("calculate")
					}else {
			// if diff already larger than  score, no need to calculate rest of the questions.		
					diff = 90;
					break;
					}
				}
				console.log(diff)
			//check if it is a better choice
				if (diff < score) {
					bestMatch = people[i];
					score = diff;
				}
			
			}
			console.log(bestMatch);
			people.push(newPerson);
			console.log(people);
			// peopleObject.data = people;
			// console.log(peopleObject)
			res.json(bestMatch);

			

			//fs.writeFile("../data/friends.js", people)



	}
	})

}