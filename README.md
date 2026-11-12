# Interactive Normal Distribution Visualizer

An interactive browser-based tool for exploring normal distributions through adjustable parameters, probability calculations, seeded simulations, CSV data analysis, and downloadable results.

Open `index.html` in a desktop or mobile browser. All calculations and file processing run locally in the browser.

## Features

- Adjust the mean and standard deviation of a normal distribution
- Compute left-tail, right-tail, and interval probabilities
- Explore central regions covering 1, 2, and 3 standard deviations
- Generate reproducible simulations using a fixed seed
- Load a CSV dataset and compare observed proportions with the theoretical model
- Export the plotted graph as a PNG image, summary results as JSON, and simulation data as CSV

## Demonstration

1. In the Distribution tab, keep mean at 70 and standard deviation at 10. For a threshold of 80, the left-tail probability is 0.84134475 and the right-tail probability is 0.15865525.
2. Switch to Interval and set the bounds to 60 and 80. The probability is 0.68268949, matching the central region within one standard deviation of the mean.
3. Return to Left tail, open Simulation, and generate 10,000 values with seed 2026. Use the same sample to compare how the threshold affects the observed proportion.
4. In the Dataset tab, load `example.csv`. The fitted values will approximate a mean of 70 and a sample standard deviation of 10.
5. Save the graph as a PNG and the summary as JSON. The simulation tab can also export generated observations as CSV.

## Lecture notes

Open the lecture notes related to this project:

- [Open lecture notes PDF](./MathsLectureNotes.pdf)
- [View lecture notes in GitHub](https://github.com/suhaThalibKK/Interactive-normal-distribution-visualizer/blob/main/MathsLectureNotes.pdf)
- [Download lecture notes](https://raw.githubusercontent.com/suhaThalibKK/Interactive-normal-distribution-visualizer/main/MathsLectureNotes.pdf)

## Notes

- Histogram bars cover the displayed domain.
- Probability calculations include the full tails.
- The fitted curve uses the sample standard deviation with denominator n - 1.
- The interface is designed for quick exploration and classroom-style understanding of normal distribution behaviour.
