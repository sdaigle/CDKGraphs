// You can reproduce this figure in Node.js with the following code!

// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api

var plotly = require('plotly')('username', 'api_key');
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 11842, null, null, null, null, null, null, null, null, nu], 
  name: "Building/Use", 
  visible: true, 
  type: "bar"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 6630, 4328, 2771, 2788, 2665, 4755, 7716, null, null, null, null, null, null, null, null, null, null, null, null, 8724, 10291, 12345, 11874, nu], 
  name: "Noise", 
  type: "bar"
};
var trace3 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, null, null, null, null, null, 24481, null, null, null, null, 12348, 10532, null, null, null, null, nu], 
  name: "Dirty Conditions", 
  visible: true, 
  type: "bar"
};
var trace4 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, 5948, null, null, null, 6576, null, null, 15232, 16196, 16178, 14256, 13486, 13213, 12761, 11141, null, null, 10061, null, null, null, null, nu], 
  name: "Sewer", 
  visible: true, 
  type: "bar"
};
var trace5 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, 1490, 1676, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, nu], 
  name: "Taxi Complaint", 
  visible: true, 
  type: "bar"
};
var trace6 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, null, null, 14899, 15691, 14542, null, 12927, 13667, 11387, null, null, null, null, null, null, null, nu], 
  name: "Gen. Construction/Plumbing", 
  visible: true, 
  type: "bar"
};
var trace7 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, 12845, 44009, 76667, 82382, 21828, 52730, 51453, 40379, 24158, 9904, 9186, 9380, 10945, 12526, 9097, null, nu], 
  name: "Street Light Condition", 
  visible: true, 
  type: "bar"
};
var trace8 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, 17009, 13963, null, null, null, null, null, null, null, null, null, null, null, null, null, null, nu], 
  name: "Missed Collection (All Materials)", 
  visible: true, 
  type: "bar"
};
var trace9 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, 4035, null, null, 1945, 5427, 9257, 14605, 18638, 19246, 19358, 19221, 18068, 19030, 20480, 21078, 20400, 17487, 15718, 13349, 11109, 8615, null, nu], 
  name: "Water System", 
  visible: true, 
  type: "bar"
};
var trace10 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, 1802, 3517, 7463, 11370, null, null, null, null, null, null, null, null, 8769, null, 8703, 9188, 10986, 8838, 7195, nu], 
  name: "Illegal Parking", 
  visible: true, 
  type: "bar"
};
var trace11 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 2736, null, null, null, 2346, 6899, 35215, 29454, 34193, 34529, 29504, 25923, 39173, 52609, 37891, 24564, 17117, 26067, 29566, 9260, 8062, null, 6596, nu], 
  name: "Street Condition", 
  visible: true, 
  type: "bar"
};
var trace12 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 24963, 20001, 12133, 11277, 15430, 30329, 60150, 143260, 222263, 242672, 244957, 225790, 227665, 218406, 216547, 194797, 151869, 133464, 104735, 94243, 83764, 74412, 57444, nu], 
  name: "Other", 
  visible: true, 
  type: "bar"
};
var trace13 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 3749, null, 2010, 2284, 1705, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, nu], 
  name: "Noise - Vehicle", 
  visible: true, 
  type: "bar"
};
var trace14 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 5471, 3416, 2816, 2875, 4095, 7652, 13432, 17141, 17593, 15573, 14515, 13872, null, 11899, null, 12145, 13125, 14664, 15488, 16770, 17193, 15296, 11664, nu], 
  name: "Blocked Driveway", 
  visible: true, 
  type: "bar"
};
var trace15 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 8485, 5796, 3797, 3289, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6897, 8956, 12070, 13982, nu], 
  name: "Noise - Street/Sidewalk", 
  visible: true, 
  type: "bar"
};
var trace16 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, 6707, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, nu], 
  name: "Sanitation Condition", 
  visible: true, 
  type: "bar"
};
var trace17 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 14817, 9553, 5097, 2458, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 13290, 18779, nu], 
  name: "Noise - Commercial", 
  visible: true, 
  type: "bar"
};
var trace18 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, null, null, 14250, 13382, 12287, null, null, null, null, null, null, null, null, null, null, null, nu], 
  name: "Damaged Tree", 
  visible: true, 
  type: "bar"
};
var trace19 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 9712, 9076, null, null, null, null, null, nu], 
  name: "Broken Muni Meter", 
  visible: true, 
  type: "bar"
};
var trace20 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, 5142, 3285, 3282, 3787, 3234, 4863, 8932, 14104, 13382, null, null, null, 14962, 33431, 17646, 12326, 10232, null, null, null, null, null, 6165, nu], 
  name: "Traffic Signal Condition", 
  visible: true, 
  type: "bar"
};
var trace21 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 
  y: [
    null, null, null, null, null, null, null, null, null, null, null, null, null, 15577, null, null, null, null, 11916, null, null, null, null, null, nu], 
  name: "Graffiti", 
  visible: true, 
  type: "bar"
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21];
var layout = {
  title: "The Most Common 311 Complaints by Hour in a Day", 
  showlegend: true, 
  autosize: false, 
  width: 808, 
  height: 700, 
  xaxis: {
    title: "Hour in Day", 
    range: [0.5, 23.5], 
    type: "linear", 
    autorange: true
  }, 
  yaxis: {
    title: "Thousands of Complaints", 
    range: [0, 458912.631579], 
    type: "linear", 
    autorange: true, 
    exponentformat: "SI", 
    showexponent: "last"
  }, 
  legend: {
    x: 1.02066115702, 
    y: 0.998076923077
  }, 
  barmode: "stack", 
  bargap: 0.36
};
var graphOptions = {layout: layout};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});

 
