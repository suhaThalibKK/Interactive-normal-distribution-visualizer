Interactive Normal Distribution Visualizer
SUHA THALIB K K | KMC26CSCE02 | M.Tech S1 | 221TCS002

Open index.html in a desktop or mobile browser. All calculations and file processing run locally. No installation or account is needed.

Views
1. Distribution: set mean and standard deviation, then explore left-tail, right-tail, interval, and central one-, two-, or three-standard-deviation probabilities.
2. Simulation: generate a reproducible synthetic sample with a sample size and seed. Compare its histogram and observed event frequency with the model. The seed 2026 and sample size 10000 yield a mean of about 70.035159 and 8352 values at or below 80 when mean is 70 and standard deviation is 10.
3. Dataset: import a CSV with a header row, select a numeric column, and compare the fitted normal curve with the observations. example.csv contains three scores with fitted mean 70 and sample standard deviation 10.
4. Inverse percentile: enter a mean, standard deviation, tail direction, and target probability to obtain the cutoff x. The June 2026 exam presets give a lower 10% cutoff of about 37.184484 and an upper 5% cutoff of about 66.448536 for N(50, 10²).
5. Solve parameters: enter two thresholds and their left-tail cumulative probabilities. The November/December 2025 exam preset uses F(60000)=0.69 and F(80000)=0.83 (because 0.69+0.14=0.83), giving mean about 38362.02 and standard deviation about 43638.12.
6. Interactive Z table: choose “Probability from a Z value” or “Z value from a probability.” Choose the form of the question (left tail, right tail, mean-to-Z area, or central area). The matching row, hundredth column and cell are highlighted while the graph shades the requested event. Three presets demonstrate Z=1.23 and questions from the 2025 and 2026 papers.

Teaching with the Z table
- The supplied scanned table reports A(z)=P(0≤Z≤z) for positive z. The digital table follows the same convention and computes each cell to four decimal places; it is not a transcription of the scan, which has mixed precision.
- For Z=1.23, use row 1.2 and column 0.03 to get A≈0.3907. Therefore P(Z≤1.23)≈0.5+0.3907=0.8907; the app also shows the more precise computed probability 0.89065145.
- For a negative Z, look up |Z| and use symmetry. Thus P(Z≤−1.23)=0.5−A≈0.1093.
- For P(Z≤z)=0.69, first convert to A=0.69−0.5=0.19, then find the nearest cell. The table suggests z≈0.50; the more precise inverse calculation gives z≈0.495850.
- The printable-style table runs from 0.00 to 3.99. If an exact Z lies outside that range, the app keeps the exact calculation and explains that no cell can be highlighted.

The inverse view requires 0 < probability < 1. The parameter solver requires x₂ > x₁ and F(x₂) > F(x₁). Invalid inputs show a correction message and clear stale results.

Use Save graph for a PNG and Save summary for a JSON record of the current calculation. Simulation also exports the generated observations as CSV. Histogram bars cover the displayed domain; probability calculations include full tails. Dataset fitting uses sample standard deviation with denominator n−1.

The exam presets demonstrate the mathematical methods. They do not establish that salaries follow a normal distribution. The browser calculation and export controls still need a recorded cross-browser and usability review before making broader reliability claims.

Optional numerical check: run `node verify_math.js` in this folder. It compares the inverse and parameter-solving calculations with independently computed exam answers, checks table cells and negative-Z symmetry, and checks invalid inputs.
