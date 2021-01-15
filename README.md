# polar music visualizer
Code for creating a simple pole-based music visualization in p5js.

The code is simple and easily adjustable. By default, the python notebook is used to extract a time series of loudness, and the js file is a p5js sketch that reads the series and creates the visualization. By default, loudness is calculated by computing the cqt and stft of the audio file, summing the values of each frequency bin at every frame, and then taking a weighted average of the two series of sums of cqt and stft frames. 
