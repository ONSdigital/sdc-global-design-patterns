module.exports = {
  title: 'Duration',
  collated: true,
  status: 'ready',
  default: 'time',
  variants: [
    {
      name: 'time',
      label: 'Time',
      context: {
        label: 'Time',
        id: 'time',
        unit1: 'Hours',
        unit1Length: 2,
        unit2: 'Mins',
        unit2Title: 'Minutes',
        unit2Length: 2,
        unit3: 'Secs',
        unit3Title: 'Seconds',
        unit3Length: 2,
      },
    },
    {
      name: 'period',
      label: 'Period',
      context: {
        label: 'Period',
        id: 'period',
        unit1: 'Days',
        unit1Length: 2,
        unit2: 'Months',
        unit2Length: 2,
        unit3: 'Years',
        unit3Length: 3,
      },
    },
  ],
};
