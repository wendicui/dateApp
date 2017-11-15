var people = require("../data/friends");

module.exports = function(app){
//return full list of people
	app.get('/api/friends', function(req,res){
		res.json(people)
	})

//return the best match
	app.post('.api/friends', function(req,res){

		var newPerson = req.body;
		var newScore = newPerson.scores;
		var bestMatch;
//set score larger than biggest possible difference
		var score = 80 ;
//loop through all person in people array
		for (var i = 0; i < people.length; i++) {
			var exst = people[i].scores;
			var diff = 0;
			
		//calculate the differnece of all questions
			for (var j = 0; j < exst.length; i++) {

				if ( diff < score){
					diff += Math.abs(exst[j] - newScore[j])
				}else {
		// if diff already larger than  score, no need to calculate rest of the questions.		
				diff = 90;
				return
				}
			}
		
		//check if it is a better choice
			if (diff < score) {
				bestMatch = people[i];
				score = diff;
			}
		
		}

		res.json(bestMatch);

		people.push(newPerson);
	})

}