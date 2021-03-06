// You can reproduce this figure in Node.js with the following code!

// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api

var plotly = require('plotly')('username', 'api_key');
var trace1 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 100.539239287, 101.035146846, 101.227732306, 100.625902744, 99.8796340876, 100.144439095, 100.505536832, 100.303322099, 99.8411169957, 99.7833413577, 99.6389022629, 99.7303803563, 99.4463168031, 98.0500722195, 98.570052961, 98.9504092441, 99.5666827155, 99.1574386134, 99.552238806, 99.9759268175, 100.024073182, 100.269619644, 99.484833895, 99.494463168, 98.6278285989, 98.2908040443, 98.3870967742, 99.3500240732, 99.2296581608, 98.9407799711, 99.0129995185, 98.3870967742, 98.4111699567, 99.046701974, 98.8204140587, 98.7289359653, 98.8204140587, 98.9648531536, 98.9648531536, 99.6629754454], 
  mode: "lines", 
  name: "1979-05-03", 
  error_y: {
    color: "rgb(0,116,217)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(0,116,217)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.05
  }, 
  line: {
    color: "rgb(179, 0, 0)", 
    width: 3
  }, 
  xaxis: "x", 
  yaxis: "y", 
  showlegend: true, 
  visible: true, 
  type: "scatter"
};
var trace2 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.897965691, 99.5153370321, 99.1008226516, 99.3877941458, 99.0242969198, 99.2411198265, 99.2411198265, 99.9744914227, 101.103245966, 102.161851923, 102.149097634, 102.149097634, 102.066194758, 101.396594605, 100.860914482, 99.8023085262, 100.503794401, 100.248708628, 100.095657165, 100.682354442, 100.153051464, 98.986034054, 97.0920221925, 97.0601364709, 97.3789936866, 97.123907914, 97.6978509024, 97.3152222435, 97.6021937376, 98.2717938907, 98.5587653849, 98.0485938397, 97.7297366239, 97.4236336968, 97.7616223455, 97.6340794592, 97.6340794592, 97.4746508513, 98.176136726, 98.1442510044], 
  mode: "lines", 
  name: "1983-06-09", 
  error_y: {
    color: "rgb(255,65,54)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,65,54)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.208333333333
  }, 
  line: {
    color: "rgb(227, 74, 51)", 
    width: 3
  }, 
  xaxis: "x", 
  yaxis: "y", 
  showlegend: true, 
  type: "scatter"
};
var trace3 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 100.02980093, 100.357611157, 100.28012874, 100.30992967, 100.071522231, 99.713911074, 99.713911074, 97.3894385505, 96.1377994993, 96.8828227441, 97.1212301824, 96.8053403266, 97.9556562165, 97.9258552867, 96.745738467, 97.2106329717, 97.6576469186, 98.9986887591, 98.8496841101, 99.016569317, 98.4622720229, 97.2702348313, 97.3894385505, 97.4013589224, 97.1391107403, 96.3166050781, 95.0649660269, 95.3033734653, 96.6742162355, 96.0841578257, 95.9887948504, 95.4106568125, 96.1258791274, 96.2868041483, 96.2868041483, 95.9589939206, 96.465609727, 96.5550125164, 96.4238884253, 96.4060078674], 
  mode: "lines", 
  name: "1987-06-11", 
  error_y: {
    color: "rgb(133,20,75)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(133,20,75)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.366666666667
  }, 
  line: {
    color: "rgb(252, 141, 89)", 
    width: 3
  }, 
  xaxis: "x", 
  yaxis: "y", 
  showlegend: true, 
  visible: true, 
  type: "scatter"
};
var trace4 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.684929109, 100.501779567, 101.178598518, 100.881031565, 99.7549448626, 99.9766614155, 100.28589766, 100.385086644, 101.056070949, 100.589299259, 101.727055254, 101.417819009, 101.306960733, 100.705992182, 100.945212673, 101.948771807, 101.995448976, 102.164653714, 102.123811191, 103.098197094, 102.917323064, 102.759787619, 102.92315771, 102.415543497, 101.966275745, 101.814574946, 102.176323006, 102.09463796, 102.823968726, 103.010677402, 103.506622323, 103.804189276, 103.693330999, 103.430771924, 103.675827061, 104.282630258, 103.763346753, 104.200945213, 104.895268102, 104.661882257], 
  mode: "lines", 
  name: "1992-04-09", 
  error_y: {
    color: "rgb(255,133,27)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,133,27)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.525
  }, 
  line: {
    color: "rgb(253, 204, 138)", 
    width: 3
  }, 
  xaxis: "x", 
  yaxis: "y", 
  showlegend: true, 
  type: "scatter"
};
var trace5 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 100.589005236, 100.57591623, 100.660994764, 101.217277487, 101.413612565, 100.543193717, 100.379581152, 100.517015707, 100.857329843, 100.641361257, 100.634816754, 101.164921466, 99.9018324607, 99.5353403141, 100.261780105, 99.9607329843, 99.7905759162, 99.1034031414, 98.835078534, 97.0746073298, 96.8848167539, 97.1662303665, 97.8795811518, 97.0157068063, 95.6348167539, 95.1308900524, 94.7316753927, 93.8089005236, 94.5287958115, 94.0183246073, 94.6335078534, 94.4044502618, 94.2997382199, 94.1557591623, 95.4319371728, 94.6204188482, 95.1439790576, 95.8835078534, 95.890052356, 95.6413612565], 
  mode: "lines", 
  name: "2010-05-06", 
  error_y: {
    color: "rgb(255,220,0)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,220,0)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.683333333333
  }, 
  line: {
    color: "rgb(254, 240, 217)", 
    width: 3
  }, 
  xaxis: "x", 
  yaxis: "y", 
  showlegend: true, 
  visible: true, 
  type: "scatter"
};
var trace6 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 100.148188051, 100.397429001, 100.488771382, 100.485413416, 100.029749809, 99.9278601189, 100.029218291, 99.7176195467, 99.7954031808, 100.012580685, 100.255296959, 100.253157708, 100.145773377, 99.5347731987, 99.4878488475, 99.589473177, 99.9203268222, 99.9574281287, 99.9142949147, 99.984926053, 99.7033067211, 99.3058876944, 98.9721400416, 98.6976491466, 98.1698522695, 97.7524147792, 97.6204596265, 97.5782511439, 98.1820473569, 98.0693611083, 98.3442562286, 98.0085812474, 98.0538956414, 98.072349371, 98.4079093832, 98.2448357612, 98.3776579029, 98.62843247, 98.8763870127, 98.9105108899], 
  mode: "lines", 
  name: "Conservative Mean", 
  error_y: {
    color: "rgb(61,153,112)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(61,153,112)", 
    size: 8, 
    symbol: "circle"
  }, 
  line: {
    color: "rgb(0, 0, 0)", 
    width: 3, 
    dash: "dot"
  }, 
  xaxis: "x", 
  yaxis: "y", 
  showlegend: true, 
  visible: true, 
  type: "scatter"
};
var trace7 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.5844269466, 99.0157480315, 98.3377077865, 97.7034120735, 98.0971128609, 97.9221347332, 98.0971128609, 98.0971128609, 99.1469816273, 99.4531933508, 99.6500437445, 99.6500437445, 99.8250218723, 100.065616798, 100.393700787, 101.290463692, 100.262467192, 101.093613298, 100.634295713, 100.678040245, 100.0, 99.7156605424, 101.662292213, 101.924759405, 101.596675416, 101.57480315, 101.57480315, 101.793525809, 102.71216098, 102.60279965, 102.099737533, 101.902887139, 101.968503937, 102.580927384, 103.237095363, 102.405949256, 103.521434821, 103.674540682, 103.893263342, 105.074365704], 
  mode: "lines", 
  name: "1974-02-28", 
  error_y: {
    color: "rgb(0,116,217)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(0,116,217)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.05
  }, 
  line: {
    color: "rgb(8, 104, 172)", 
    width: 3
  }, 
  xaxis: "x2", 
  yaxis: "y2", 
  showlegend: true, 
  type: "scatter"
};
var trace8 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.848844742, 99.9049881235, 100.064780825, 100.172748866, 99.9784063917, 99.9438566184, 100.043187217, 99.9697689484, 100.021593608, 100.323904124, 100.712589074, 100.734182682, 100.893975383, 100.777369899, 100.496652991, 100.842150723, 100.872381775, 100.811919672, 101.101274023, 100.410278558, 100.798963507, 100.798963507, 100.669401857, 100.786007342, 100.738501404, 100.72986396, 100.621895919, 100.604621032, 100.734182682, 100.690995465, 100.764413734, 100.725545239, 100.80760095, 100.850788167, 100.863744332, 100.971712373, 101.187648456, 101.187648456, 101.369034766, 101.334484992], 
  mode: "lines", 
  name: "1974-10-10", 
  error_y: {
    color: "rgb(255,65,54)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,65,54)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.208333333333
  }, 
  line: {
    color: "rgb(67, 162, 202)", 
    width: 3
  }, 
  xaxis: "x2", 
  yaxis: "y2", 
  showlegend: true, 
  type: "scatter"
};
var trace9 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.3617409276, 98.8936842745, 98.8268190384, 98.4438635949, 98.7052458817, 98.9423135372, 98.4742568841, 98.9970214577, 98.7721111179, 99.1064372986, 99.276639718, 99.4468421373, 99.276639718, 98.7052458817, 98.8450550119, 98.5715154094, 98.7113245395, 99.1733025348, 98.693088566, 99.0091787733, 98.5775940672, 98.6870099082, 99.3191903228, 98.1703239925, 98.3952343323, 98.6566166191, 98.693088566, 99.1733025348, 100.072943894, 99.8662695277, 99.4346848216, 99.6960671084, 100.620023099, 100.170202419, 98.7356391709, 99.3556622698, 99.6960671084, 99.2340891131, 99.6899884506, 99.6595951614], 
  mode: "lines", 
  name: "1997-05-01", 
  error_y: {
    color: "rgb(133,20,75)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(133,20,75)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.366666666667
  }, 
  line: {
    color: "rgb(123, 204, 196)", 
    width: 3
  }, 
  xaxis: "x2", 
  yaxis: "y2", 
  showlegend: true, 
  type: "scatter"
};
var trace10 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.7820125167, 99.8523310597, 100.168764503, 100.611771324, 100.696153576, 101.223542648, 101.279797483, 100.379720132, 99.8031080796, 99.0085085437, 100.028127417, 99.8663947683, 100.084382252, 100.281274172, 99.7398213909, 99.7398213909, 99.4515153646, 99.4163560931, 97.9256029815, 97.9326348358, 96.9270796709, 96.5262639758, 96.6598692075, 97.8834118557, 98.5444061599, 98.663947683, 98.7764573518, 98.5373743056, 98.1435904648, 99.5288657619, 99.3741649673, 99.3601012587, 99.5148020533, 99.6624709936, 99.0647633781, 99.5218339076, 99.6835665565, 98.9663174179, 98.9381900007, 98.6428521201], 
  mode: "lines", 
  name: "2001-06-07", 
  error_y: {
    color: "rgb(255,133,27)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,133,27)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.525
  }, 
  line: {
    color: "rgb(240, 249, 232)", 
    width: 3
  }, 
  xaxis: "x2", 
  yaxis: "y2", 
  showlegend: true, 
  type: "scatter"
};
var trace11 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 100.850403808, 101.133871744, 101.203401615, 101.321067551, 100.631117292, 101.230143873, 101.823822004, 102.599347489, 102.658180457, 102.07519923, 102.396106327, 102.214258972, 101.936139488, 101.930791036, 101.936139488, 102.091244585, 101.353158261, 101.21944697, 101.754292132, 101.984275552, 101.101781034, 100.764828582, 100.695298711, 100.171150452, 99.7646681286, 98.97844574, 98.3312830935, 98.0745574156, 98.4275552228, 98.2831470289, 97.7215596085, 97.8980585121, 97.7376049634, 97.9622399315, 97.3418195432, 97.571802963, 97.5343638017, 97.1867144462, 96.7748836712, 97.0904423169], 
  mode: "lines", 
  name: "2005-05-05", 
  error_y: {
    color: "rgb(255,220,0)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,220,0)", 
    size: 8, 
    symbol: "circle", 
    opacity: 0.683333333333
  }, 
  line: {
    color: "rgb(182, 215, 168)", 
    width: 3
  }, 
  xaxis: "x2", 
  yaxis: "y2", 
  showlegend: true, 
  visible: true, 
  type: "scatter"
};
var trace12 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.8854857882, 99.758763643, 99.7175040063, 99.6444920533, 99.6200545394, 99.8484356109, 99.9377112899, 100.00375183, 100.079314077, 99.9963525164, 100.416599651, 100.387198506, 100.409134328, 100.35719594, 100.288205071, 100.511338267, 100.138418852, 100.35266719, 100.026993664, 100.009684063, 99.4867559483, 99.3036708337, 99.8068723904, 99.7993984313, 99.8252620134, 99.7391672973, 99.6174803387, 99.6536633144, 100.032082609, 100.213919555, 99.8979692484, 99.9375197418, 100.150272211, 100.265368232, 99.8617644385, 99.9871051016, 100.341036924, 100.061797368, 100.141341006, 100.361619634], 
  mode: "lines", 
  name: "Labour Mean", 
  error_y: {
    color: "rgb(61,153,112)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(61,153,112)", 
    size: 8, 
    symbol: "circle"
  }, 
  line: {
    color: "rgb(0, 0, 0)", 
    width: 3, 
    dash: "dash"
  }, 
  xaxis: "x2", 
  yaxis: "y2", 
  showlegend: true, 
  visible: true, 
  type: "scatter"
};
var trace13 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 99.8854857882, 99.758763643, 99.7175040063, 99.6444920533, 99.6200545394, 99.8484356109, 99.9377112899, 100.00375183, 100.079314077, 99.9963525164, 100.416599651, 100.387198506, 100.409134328, 100.35719594, 100.288205071, 100.511338267, 100.138418852, 100.35266719, 100.026993664, 100.009684063, 99.4867559483, 99.3036708337, 99.8068723904, 99.7993984313, 99.8252620134, 99.7391672973, 99.6174803387, 99.6536633144, 100.032082609, 100.213919555, 99.8979692484, 99.9375197418, 100.150272211, 100.265368232, 99.8617644385, 99.9871051016, 100.341036924, 100.061797368, 100.141341006, 100.361619634], 
  mode: "lines", 
  name: "Labour Mean", 
  error_y: {
    color: "rgb(0,116,217)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(0,116,217)", 
    size: 8, 
    symbol: "circle"
  }, 
  line: {
    color: "rgb(0, 0, 0)", 
    width: 3, 
    dash: "dash"
  }, 
  xaxis: "x3", 
  yaxis: "y3", 
  showlegend: false, 
  type: "scatter"
};
var trace14 = {
  x: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
  y: [100, 100.148188051, 100.397429001, 100.488771382, 100.485413416, 100.029749809, 99.9278601189, 100.029218291, 99.7176195467, 99.7954031808, 100.012580685, 100.255296959, 100.253157708, 100.145773377, 99.5347731987, 99.4878488475, 99.589473177, 99.9203268222, 99.9574281287, 99.9142949147, 99.984926053, 99.7033067211, 99.3058876944, 98.9721400416, 98.6976491466, 98.1698522695, 97.7524147792, 97.6204596265, 97.5782511439, 98.1820473569, 98.0693611083, 98.3442562286, 98.0085812474, 98.0538956414, 98.072349371, 98.4079093832, 98.2448357612, 98.3776579029, 98.62843247, 98.8763870127, 98.9105108899], 
  mode: "lines", 
  name: "Conservative Mean", 
  error_y: {
    color: "rgb(255,65,54)", 
    thickness: 1, 
    width: 1
  }, 
  error_x: {copy_ystyle: true}, 
  marker: {
    color: "rgb(255,65,54)", 
    size: 8, 
    symbol: "circle"
  }, 
  line: {
    color: "rgb(0, 0, 0)", 
    width: 3, 
    dash: "dot"
  }, 
  xaxis: "x3", 
  yaxis: "y3", 
  showlegend: false, 
  type: "scatter"
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14];
var layout = {
  title: "GBP USD during UK general elections by winning party", 
  showlegend: true, 
  autosize: false, 
  width: 800, 
  height: 700, 
  xaxis: {
    title: "", 
    range: [-20, 20], 
    domain: [0, 1], 
    type: "linear", 
    autorange: true, 
    showgrid: true, 
    zeroline: true, 
    showline: false, 
    ticks: "", 
    ticklen: 8, 
    tickwidth: 1.5, 
    mirror: false, 
    gridcolor: "rgb(217, 217, 217)", 
    zerolinecolor: "rgb(204, 204, 204)", 
    zerolinewidth: 2, 
    linecolor: "rgb(34,34,34)", 
    linewidth: 1, 
    anchor: "y"
  }, 
  yaxis: {
    title: "Conservative<br>party wins", 
    range: [93.1929912136, 105.511177412], 
    domain: [0, 0.33], 
    type: "linear", 
    autorange: true, 
    showgrid: true, 
    zeroline: true, 
    showline: false, 
    ticks: "", 
    ticklen: 8, 
    tickwidth: 1.5, 
    mirror: false, 
    gridcolor: "rgb(217, 217, 217)", 
    zerolinecolor: "rgb(204, 204, 204)", 
    zerolinewidth: 2, 
    linecolor: "rgb(34,34,34)", 
    linewidth: 1, 
    anchor: "x"
  }, 
  legend: {
    x: 1.01918465228, 
    y: 1.00731707317, 
    traceorder: "reversed", 
    bgcolor: "rgba(255, 255, 255, 0.5)", 
    xref: "paper", 
    yref: "paper", 
    yanchor: "auto"
  }, 
  annotations: [
    {
      x: 0.996402877698, 
      y: -0.113414634146, 
      xref: "paper", 
      yref: "paper", 
      text: "Post-election days", 
      showarrow: true, 
      arrowhead: 4, 
      ax: -143, 
      ay: -1
    }, 
    {
      x: 0.416581020898, 
      y: -0.113414634146, 
      xref: "paper", 
      yref: "paper", 
      text: "Pre-election days", 
      showarrow: true, 
      arrowhead: 0, 
      ax: -162, 
      ay: 0
    }
  ], 
  paper_bgcolor: "white", 
  plot_bgcolor: "white", 
  xaxis3: {
    title: "", 
    range: [-20, 20], 
    domain: [0, 1], 
    type: "linear", 
    autorange: true, 
    showgrid: true, 
    zeroline: true, 
    showline: false, 
    ticks: "", 
    showticklabels: false, 
    ticklen: 8, 
    tickwidth: 1.5, 
    mirror: false, 
    gridcolor: "rgb(217, 217, 217)", 
    zerolinecolor: "rgb(204, 204, 204)", 
    zerolinewidth: 2, 
    linecolor: "rgb(34,34,34)", 
    linewidth: 1, 
    anchor: "y3"
  }, 
  xaxis2: {
    title: "", 
    range: [-20, 20], 
    domain: [0, 1], 
    type: "linear", 
    autorange: true, 
    showgrid: true, 
    zeroline: true, 
    showline: false, 
    ticks: "", 
    showticklabels: false, 
    ticklen: 8, 
    tickwidth: 1.5, 
    mirror: false, 
    gridcolor: "rgb(217, 217, 217)", 
    zerolinecolor: "rgb(204, 204, 204)", 
    zerolinewidth: 2, 
    linecolor: "rgb(34,34,34)", 
    linewidth: 1, 
    anchor: "y2"
  }, 
  yaxis2: {
    title: "Labour<br>party wins", 
    range: [96.0513694353, 105.549260245], 
    domain: [0.33, 0.66], 
    type: "linear", 
    autorange: true, 
    showgrid: true, 
    zeroline: true, 
    showline: false, 
    nticks: 5, 
    ticks: "", 
    dtick: 1, 
    ticklen: 8, 
    tickwidth: 1.5, 
    mirror: false, 
    gridcolor: "rgb(217, 217, 217)", 
    zerolinecolor: "rgb(204, 204, 204)", 
    zerolinewidth: 2, 
    linecolor: "rgb(34,34,34)", 
    linewidth: 1, 
    anchor: "x2"
  }, 
  yaxis3: {
    title: "Comparison<br>of means", 
    range: [97.4153018593, 100.674287551], 
    domain: [0.66, 1], 
    type: "linear", 
    autorange: true, 
    showgrid: true, 
    zeroline: true, 
    showline: false, 
    ticks: "", 
    ticklen: 8, 
    tickwidth: 1.5, 
    mirror: false, 
    gridcolor: "rgb(217, 217, 217)", 
    zerolinecolor: "rgb(204, 204, 204)", 
    zerolinewidth: 2, 
    linecolor: "rgb(34,34,34)", 
    linewidth: 1, 
    anchor: "x3"
  }
};
var graphOptions = {layout: layout};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
