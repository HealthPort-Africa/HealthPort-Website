import raw from "../../data/metrics.json";

export type Metric = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  source?: string;
};

type MetricsFile = {
  hospitalsServed: Metric;
  litresDelivered: Metric;
  patientsSupported: Metric;
  supplyReliability: Metric;
};

const supplied = raw[0];
const numberFrom = (value: string) => Number(value.replace(/,/g, "").match(/[\d.]+/)?.[0]);

export const metrics: MetricsFile = {
  hospitalsServed: { value: numberFrom(supplied.Hospitals), suffix: "+", label: "Hospitals served" },
  litresDelivered: { value: numberFrom(supplied.Liters), suffix: "M+", decimals: 1, label: "Litres of medical oxygen delivered" },
  patientsSupported: { value: numberFrom(supplied.Patients), suffix: "+", label: "Patients supported" },
  supplyReliability: { value: numberFrom(supplied.Reliability), suffix: "%", decimals: 1, label: "Supply reliability" },
};

export const metricsOrdered: Metric[] = [
  metrics.hospitalsServed,
  metrics.litresDelivered,
  metrics.patientsSupported,
  metrics.supplyReliability,
];

export const BILLING_DISCLAIMER =
  "Usage and billing projections are estimates based on facility bed metrics and clinical usage patterns, not guaranteed fixed amounts.";
