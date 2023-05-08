/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * 1000 Lights
 *
 * https://launchschool.com/exercises/4dfb6228
 *
 */


/**
 * Given a count of switches, return an array containing the indexes of the "on"
 * lights after the switches have been toggled `numSwitches` times.
 *
 * Switches are toggled by making `numSwitches` passes over the lights, each
 * time toggling lights with indexes that are multiples of the current pass
 * number. Lights are 1-indexed.
 * @param {Number} numSwitches the number of light switches
 * @returns {Array<Number>} an array containing the "on" lights' indexes
 */
function lightsOn(numSwitches) {
  if (numSwitches < 0) throw new TypeError("numSwitches must be >= 0");

  let switches = Array(numSwitches + 1).fill(false);
  let passNum = 1;

  while (passNum <= numSwitches) {
    for (let idx = passNum; idx < switches.length; idx += passNum) {
      switches[idx] = !switches[idx];
    }
    passNum += 1;
  }

  return switches.reduce((onLights, isOn, idx) => {
    if (idx > 0 && isOn) onLights.push(idx);
    return onLights;
  }, []);
}

module.exports = {
  lightsOn,
};
