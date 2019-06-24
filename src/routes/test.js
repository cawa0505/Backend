var express = require('express');
var router = express.Router();

var db = require('./../controller/DBController_public');

router.get('/test1_lhl', async function(req, res, next) {
	try {
		let strc = db.getSQLObject();
		strc["query"] = "select";
		strc["tables"] = "userInfo";
		strc["data"] = {
			"*":0
		};
		let one = await db.ControlAPI_obj_async(strc);

		let strc1 = db.getSQLObject(), strc2 = db.getSQLObject();
		strc1["query"] = "select";
		strc1["tables"] = "userDuty";
		strc1["data"] = {
			"*":0
		};
		
		strc2["query"] = "select";
		strc2["tables"] = "duty";
		strc2["data"] = {
			"*":0
		};
		let many = await db.ControlAPI_objs_async(strc1, strc2);
		res.send({one : one, many : many});
	}
	catch(err) {
		res.send({err1: err});
	}
});

var obj = {};
router.post('/createSurvey', function(req, res, next){
	obj = req.body;
	console.log(req.body);
	res.send(req.body);
});

router.get('/showSurvey', function(req, res, next){
	res.json(obj);
});

router.post('/submitSurvey', function(req, res, next){
	console.log(req.body);
	res.send(req.body);
});

module.exports = router;
