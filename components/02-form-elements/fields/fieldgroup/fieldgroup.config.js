module.exports = {
  title: 'Fieldgroup',
  default: 'fieldgroup',
  collated: true,
  status: 'ready',
  preview: '@preview__container',
  variants: [
    {
      name: 'fieldgroup',
      label: 'Fieldgroup',
    },
    {
      name: 'date',
      label: 'Date',
      context: {
        id: 'date',
        legend: 'Please enter a date',
        description: 'For example, 31 3 1980',
        dayLabel: 'Day',
        monthLabel: 'Month',
        yearLabel: 'Year',
      },
    },
  ],
}
