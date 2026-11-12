// Run with: node verify_math.js
// Checks the pure mathematical functions embedded in the self-contained app.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
const script = html.split('<script>')[1]?.split('</script>')[0];
if (!script) throw Error('Application script not found.');
const core = script.split('function update')[0];
if (core === script) throw Error('Mathematical core boundary not found.');

vm.runInNewContext(core + `
  function close(actual, expected, tolerance = 1e-9) {
    assert.ok(Math.abs(actual - expected) <= tolerance,
      actual + ' differs from ' + expected);
  }
  close(cdf(1), 0.8413447460685429, 1e-10);
  close(inverseCDF(0.1), -1.2815515655446004);
  close(inverseCDF(0.95), 1.6448536269514722);
  close(50 + 10 * inverseCDF(0.1), 37.184484344554);
  close(50 - 10 * inverseCDF(0.05), 66.448536269515);
  for (const p of [0.000001, 0.01, 0.1, 0.5, 0.69, 0.83, 0.95, 0.999999])
    close(cdf(inverseCDF(p)), p, 1e-12);

  const salary = solveNormal(60000, 0.69, 80000, 0.83);
  close(salary.mean, 38362.0239676344, 1e-6);
  close(salary.standardDeviation, 43638.1181300321, 1e-6);
  close(cdf((60000 - salary.mean) / salary.standardDeviation), 0.69, 1e-12);
  close(cdf((80000 - salary.mean) / salary.standardDeviation), 0.83, 1e-12);

  const cell = tableCellForZ(1.23);
  assert.equal(cell.row, 12);
  assert.equal(cell.col, 3);
  assert.equal(cell.area, 0.3907);
  assert.equal(tableCellForZ(-1.23).area, cell.area);
  assert.equal(tableCellForZ(4.01), null);
  assert.equal(tableCellForArea(0.19).z, 0.5);
  close(cdf(-1.23), 0.1093485524256919, 1e-10);
  close(sf(1.23), 0.1093485524256919, 1e-10);

  for (const inputs of [
    [60000, 0, 80000, 0.83], [60000, 0.69, 80000, 1],
    [80000, 0.69, 60000, 0.83], [60000, 0.83, 80000, 0.69]
  ]) assert.throws(() => solveNormal(...inputs));
  console.log('Normal distribution math checks passed.');
`, {assert, console, document: {}, Math, Number, Error});
