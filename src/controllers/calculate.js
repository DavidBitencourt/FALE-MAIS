import data from "../utils/data.json";
import plans from "../utils/plans.json";

export default class Calculate {
  getValuePerMinute(origin, destination) {
    let minute = data.find(
      (item) => item.origin === origin && item.destination === destination
    );
    return minute;
  }

  calculateRate(minute) {
    let minuteRate = (minute * 10) / 100 + minute;
    return minuteRate;
  }

  getLimitPlan(plan) {
    let valueCallTime = plans.find((item) => item.label === plan);
    return valueCallTime;
  }

  calculateWithPlan(callTime, valueCallTime, minuteRate) {
    return callTime > valueCallTime.value
      ? (callTime - valueCallTime.value) * minuteRate
      : 0;
  }

  calculateWithoutPlan(callTime, minute) {
    return callTime * minute;
  }

  calculateProfit(withoutPlan, withPlan) {
    return withoutPlan - withPlan;
  }
}
