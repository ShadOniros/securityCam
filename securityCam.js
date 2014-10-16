exports.standBy = function(motion, data, SARAH){
  cltSARAH= SARAH;

  if(state=="on" && motion){
	motionDetected=true;
	SARAH.remote({'picture' : "true"});
  
	setTimeout(function(){
	cltSARAH.remote({'picture' : "true"});
	}, 1000);
	
	setTimeout(function(){
	cltSARAH.remote({'picture' : "true"});
	}, 2000);
	
	setTimeout(function(){
	cltSARAH.remote({'picture' : "true"});
	}, 3000);
	
	setTimeout(function(){
	cltSARAH.remote({'picture' : "true"});
	}, 4000);
	
	setTimeout(function(){
	cltSARAH.remote({'picture' : "true"});
	}, 5000);
	
	SARAH.remote({'tts' : "Intru détecté! Contre mesure activées"});
  }
}

exports.action = function(data, callback, config, SARAH) {
config = config.modules.securityCam;

  if(data.securityCamState != false){
		if(data.securityCamState=="securityCamState"){
			if(state=="off"){
				var tts = config.stateOff;
			}
			if(state=="on"){
				var tts = config.stateOn;
			}
		}
		else{
			if(data.securityCamState=="off"){
				state=data.securityCamState;
				var tts = config.off;
				if(motionDetected){
					tts=tts+ ". " + config.motionWhileAway;
					motionDetected=false;
				}
			}
			if(data.securityCamState=="on"){
				setTimeout(function(){
				state=data.securityCamState;
				}, 5000);
				var tts = config.on;
			}
		}
	
  }

  callback({'tts': tts});
}
var config;
var cltSARAH;
var state="off";
var motionDetected=false;




