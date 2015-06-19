# Get this figure: fig = py.get_figure("https://plot.ly/~MattSundquist/10789/")
# Get this figure's data: data = py.get_figure("https://plot.ly/~MattSundquist/10789/").get_data()
# Add data to this figure: py.plot(Data([Scatter(x=[1, 2], y=[2, 3])]), filename ="plot from API (166)", fileopt="extend"))
# Get y data of first trace: y1 = py.get_figure("https://plot.ly/~MattSundquist/10789/").get_data()[0]["y"]

# Get figure documentation: https://plot.ly/python/get-requests/
# Add data documentation: https://plot.ly/python/file-options/

# You can reproduce this figure in Python with the following code!

# Learn about API authentication here: https://plot.ly/python/getting-started
# Find your api_key here: https://plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('username', 'api_key')
trace1 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, 11842, None, None, None, None, None, None, None, None, None],
    name='Building/Use',
    visible=True
)
trace2 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 6630, 4328, 2771, 2788, 2665, 4755, 7716, None, None, None, None, None, None, None, None, None, None, None, None, 8724, 10291, 12345, 11874, None],
    name='Noise'
)
trace3 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, None, None, None, None, None, 24481, None, None, None, None, 12348, 10532, None, None, None, None, None],
    name='Dirty Conditions',
    visible=True
)
trace4 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, 5948, None, None, None, 6576, None, None, 15232, 16196, 16178, 14256, 13486, 13213, 12761, 11141, None, None, 10061, None, None, None, None, None],
    name='Sewer',
    visible=True
)
trace5 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, 1490, 1676, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None],
    name='Taxi Complaint',
    visible=True
)
trace6 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, None, None, 14899, 15691, 14542, None, 12927, 13667, 11387, None, None, None, None, None, None, None, None],
    name='Gen. Construction/Plumbing',
    visible=True
)
trace7 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, 12845, 44009, 76667, 82382, 21828, 52730, 51453, 40379, 24158, 9904, 9186, 9380, 10945, 12526, 9097, None, None],
    name='Street Light Condition',
    visible=True
)
trace8 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, 17009, 13963, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None],
    name='Missed Collection (All Materials)',
    visible=True
)
trace9 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, 4035, None, None, 1945, 5427, 9257, 14605, 18638, 19246, 19358, 19221, 18068, 19030, 20480, 21078, 20400, 17487, 15718, 13349, 11109, 8615, None, None],
    name='Water System',
    visible=True
)
trace10 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, 1802, 3517, 7463, 11370, None, None, None, None, None, None, None, None, 8769, None, 8703, 9188, 10986, 8838, 7195, None],
    name='Illegal Parking',
    visible=True
)
trace11 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 2736, None, None, None, 2346, 6899, 35215, 29454, 34193, 34529, 29504, 25923, 39173, 52609, 37891, 24564, 17117, 26067, 29566, 9260, 8062, None, 6596, None],
    name='Street Condition',
    visible=True
)
trace12 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 24963, 20001, 12133, 11277, 15430, 30329, 60150, 143260, 222263, 242672, 244957, 225790, 227665, 218406, 216547, 194797, 151869, 133464, 104735, 94243, 83764, 74412, 57444, None],
    name='Other',
    visible=True
)
trace13 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 3749, None, 2010, 2284, 1705, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None],
    name='Noise - Vehicle',
    visible=True
)
trace14 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 5471, 3416, 2816, 2875, 4095, 7652, 13432, 17141, 17593, 15573, 14515, 13872, None, 11899, None, 12145, 13125, 14664, 15488, 16770, 17193, 15296, 11664, None],
    name='Blocked Driveway',
    visible=True
)
trace15 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 8485, 5796, 3797, 3289, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, 6897, 8956, 12070, 13982, None],
    name='Noise - Street/Sidewalk',
    visible=True
)
trace16 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, 6707, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None],
    name='Sanitation Condition',
    visible=True
)
trace17 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 14817, 9553, 5097, 2458, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, 13290, 18779, None],
    name='Noise - Commercial',
    visible=True
)
trace18 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, None, None, 14250, 13382, 12287, None, None, None, None, None, None, None, None, None, None, None, None],
    name='Damaged Tree',
    visible=True
)
trace19 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, 9712, 9076, None, None, None, None, None, None],
    name='Broken Muni Meter',
    visible=True
)
trace20 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, 5142, 3285, 3282, 3787, 3234, 4863, 8932, 14104, 13382, None, None, None, 14962, 33431, 17646, 12326, 10232, None, None, None, None, None, 6165, None],
    name='Traffic Signal Condition',
    visible=True
)
trace21 = Bar(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    y=[None, None, None, None, None, None, None, None, None, None, None, None, None, 15577, None, None, None, None, 11916, None, None, None, None, None, None],
    name='Graffiti',
    visible=True
)
data = Data([trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21])
layout = Layout(
    title='The Most Common 311 Complaints by Hour in a Day',
    showlegend=True,
    autosize=False,
    width=808,
    height=700,
    xaxis=XAxis(
        title='Hour in Day',
        range=[0.5, 23.5],
        type='linear',
        autorange=True
    ),
    yaxis=YAxis(
        title='Thousands of Complaints',
        range=[0, 458912.63157894736],
        type='linear',
        autorange=True,
        exponentformat='SI',
        showexponent='last'
    ),
    legend=Legend(
        x=1.0206611570247934,
        y=0.9980769230769231
    ),
    barmode='stack',
    bargap=0.36
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig)

 
