module.exports = {
  'title': 'Message',
  'default': 'internal',
  'collated': false,
  'status': 'wip',
  'variants': [{
    'name': 'internal',
    'label': 'Internal',
    'context': {
      'message_internal': true,
      'message_variant': 'internal',
      'message_body': '<p>Dear Jacky<br><br>Thanks for returning the BRES 2017 spreadsheet for Bolts &amp; Ratchets. I wonder if I could clarify employee figures for two of the sites, as they’re very different to last year’s figures.'+
                      'The sites are:<br>Macclesfield<br>'+
                      '2015: 45 - 2017: 1<br>and Skipton<br>'+
                      '2015: 11 - 2017: 183<br>Are these figures correct?<br>'+
                      '<br>'+
                      'Many thanks<br>'+
                      'David Cleere<br>'+
                      'BRES Survey Team</p>',
      'message_subject': 'BRES 2016 survey response query',
      'message_datetime': 'Fri 30 Jun 2017 at 11:47'
    },
  },{
    'name': 'external',
    'label': 'External',
    'context': {
      'message_variant': 'external',
      'message_body': '<p>Hi Dave<br>Thanks for your message. Yes, the figures are right - we had a big expansion last year when we bought The Widgets Group and moved staff to Skipton.'+
                      '<br><br>Thanks, Jacky</p>',
      'message_subject': 'RE: BRES 2016 survey response query',
      'message_datetime': 'Fri 30 Jun 2017 at 14:21'
    },
  }],
}
