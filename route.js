Router.route('/', function () {
  this.render('product_list')
});

Router.route('/products/new',function(){
  this.render('product_edit')
})

if(Meteor.isClient){
  Template.product_list.helpers({
    products:Products.find()
  })
}
