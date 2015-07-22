Picker.route('/', function(params, req, res, next) {
  SSR.compileTemplate('emailText', ' Now time is:{{time}}');

  Template.emailText.helpers({
    time: function() {
      return new Date().toString();
    }
  });

  var html = SSR.render('emailText')
  res.end(html);
});
