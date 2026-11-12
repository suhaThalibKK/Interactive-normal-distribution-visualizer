Interactive Normal Distribution Visualizer
SUHA THALIB K K | KMC26CSCE02 | M.Tech S1 | 221TCS002

Open index.html in a desktop or mobile browser. All calculations and file processing run locally. The HTML file contains the complete interface and source code.

Demonstration
1. In Distribution, leave mean at 70 and standard deviation at 10. For a threshold of 80 the left-tail probability is 0.84134475. Select Right tail for 0.15865525.
2. Choose Interval, with bounds 60 and 80. The probability is 0.68268949. Explore the central one-, two- and three-standard-deviation regions.
3. Return to Left tail. Select Simulation and generate 10000 values with seed 2026. The sample has mean 70.035159 and 8352 observations at or below 80. Moving the threshold reuses the same sample.
4. In Dataset, load example.csv. Its three values give a fitted mean of 70 and sample standard deviation of 10. Compare the observed proportion (all three values) with the model probability.
5. Save the graph as PNG and summary as JSON. The simulation tab also exports the generated observations as CSV.

Histogram bars cover the displayed domain. Probability calculations include the full tails. The fitted curve uses sample standard deviation with denominator n−1. A close visual fit is only a descriptive comparison.
