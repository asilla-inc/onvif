/**
 * Created by Andrew D.Laptev<a.d.laptev@gmail.com> on 1/21/15.
 */

/* カメラの接続情報 */ 
var CAMERA_HOST = '192.168.0.155',
	USERNAME = 'admin',
	PASSWORD = 'otw200128',
	PORT = 80;

var http = require('http'),
	Cam = require('./lib/onvif').Cam;
const { linerase } = require('./lib/utils');
const util = require('util')

new Cam({
	hostname: CAMERA_HOST,
	username: USERNAME,
	password: PASSWORD,
	port: PORT
}, function(err) {
	if (err) {
		console.log('Connection Failed for ' + CAMERA_HOST + ' Port: ' + PORT + ' Username: ' + USERNAME + ' Password: ' + PASSWORD);
		return;
	}
	console.log('CONNECTED');

	// this.absoluteMove({
	// 	x: 1,
	// 	y: 5,
	// 	zoom: 0.1
	// });
	console.log(util.inspect(this, {showHidden: false, depth: null}))
	// var newProfile = this.profiles[0].videoEncoderConfiguration
	// newProfile.resolution = {width:1280,height:720}
	// newProfile.rateControl.bitrateLimit = 788
	// console.log(util.inspect(newProfile, {showHidden: false, depth: null}))

	// this.setVideoEncoderConfiguration(newProfile, function(_, data, xml) {
	// 	console.log(data, xml)
	// })
});
