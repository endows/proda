Router.route('/', function () {
  this.render('product_list')
});

if(Meteor.isClient){
  Template.product_list.helpers({
    products:Products.find()
  })
}
