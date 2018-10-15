module.exports = {
  title: 'Tabs',
  label: 'Tabs',
  name: 'tabs',
  status: 'wip',
  context: {
    'tabs-aria-label':'This is the tabs region',
    'tabs':[
    {
      'tab': 'UKIS',
      'tabContent' : `<h3>Aim of this survey</h3>
<p class="mars">The aim of the UK Innovation Survey (UKIS) is to collect data from businesses about various aspects of their innovation related activities. Using this data we can measure the level, types and trends in innovation.</p>
<h3>How we’ll use this data</h3>
<p class="mars">The UKIS data is a major source of evidence to inform government policy. It is used to promote innovation activities among businesses to boost economic growth. It is an important contribution to the European-wide Community Innovation Survey (CIS). The CIS is used for international benchmarking and comparison purposes.</p>
<p><a href="https://www.ons.gov.uk/surveys/informationforbusinesses/businesssurveys/ukinnovationsurvey">More information on the UKIS survey</a> can be found on the ONS website.`
    },
    {
      'tab': 'Vacancy survey',
      'tabContent' : `<h3>Purpose</h3>
<p class="mars">The Vacancy Survey is a regular survey of businesses, which provides an accurate and comprehensive measure of the total number of vacancies across the economy and fills a gap in the information available regarding the demand for labour. Before the Vacancy Survey was introduced, the only information available nationally about vacancies was from records of vacancies notified to Job Centres by employers. This provided only a partial picture, possibly less than half of all vacancies, because employers are under no obligation to notify vacancies to Job Centres. This business based survey has a more complete coverage and is included in the monthly ONS Labour Market Statistical Bulletin.</p>
<p><a href="https://www.ons.gov.uk/surveys/informationforbusinesses/businesssurveys/vacancysurvey">More information on the Vacancy Survey</a> can be found on the ONS website.`
    },
    {
      'tab': 'Third',
      'tabContent' : 'Third content of tabs region'
    },
    {
      'tab': 'The other thing',
      'tabContent' : 'No. 4'
    }],
  }
}
