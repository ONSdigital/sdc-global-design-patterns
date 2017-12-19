module.exports = {
  title: 'Definitions',
  status: 'wip',
  context: {
    definitioncontent:
      'Do you connect an <a role="button" id="def-accumulator" href="#definition__accumulator" title="Definition of accumulator" class="definition__anchor" data-title="Definition for an accumulator" data-popup-call="An accumulator is an energy storge device; a device which accepts energy, stores energy and releases energy as needed." data-popup-response="Close definition" >accumulator</a> to your <a role="button" id="def-photovoltaic" href="#definition__photovoltaic" title="Definition of photovoltaic system" class="definition__anchor" data-title="Definition for a photovoltaic system" data-popup-call="Photovoltaics known as solar panels are usually installed on homes and comercial properties. They produce electricity directly from the energy of the sun. The panels are usually installed on the roof of your property." data-popup-response="Close definition" >photovoltaic system</a> to store surplus energy?',
    definitions: [
      {
        id: 'definition__accumulator',
        title: 'Definition for an accumulator',
        description:
          'An accumulator is an energy storge device; a device which accepts energy, stores energy and releases energy as needed.'
      },
      {
        id: 'definition__photovoltaic',
        title: 'Definition for a photovoltaic system',
        description:
          'Photovoltaics known as solar panels are usually installed on homes and comercial properties. They produce electricity directly from the energy of the sun. The panels are usually installed on the roof of your property.'
      }
    ]
  }
};
