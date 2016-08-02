var TogglClient = require('toggl-api');
var toggl = new TogglClient({apiToken: '8264f06173878d57440c7a22d6ced2d0'});

toggl.getCurrentTimeEntry(function (err, dados) {
  console.log(dados.description);
  console.log(dados.tags);
});


/*console.log(err);

/*8264f06173878d57440c7a22d6ced2d0*/

toggl.startTimeEntry({
  description: 'Some cool work',
  billable:    false
}, function(err, timeEntry) {
  // handle error

  // working 10 seconds
  setTimeout(function() {
    toggl.stopTimeEntry(timeEntry.id, function(err) {
      // handle error
      console.log(JSON.stringify(timeEntry.id));

      toggl.updateTimeEntry(timeEntry.id, {tags: ['finished']}, function(err) {
        toggl.destroy()
      });
    });
  }, 120);
});



