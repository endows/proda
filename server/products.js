Picker.route('/', function(params, req, res, next) {
  SSR.compileTemplate('emailText', Assets.getText('product_list.html') )

  Template.emailText.helpers({
    time: function() {
      return new Date().toString();
    }
  });

  var html = SSR.render('emailText',{
    css:Assets.getText('style.css')
  })
  res.end(html);
});
