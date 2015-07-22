if (Meteor.isClient) {
  Router.route('/', function() {
    this.render('product_list',{
      data:{
        products: Products.find()
      }
    })
  });

  Router.route('/product/:_id', function() {
    this.render('product', {
      data: Products.findOne(this.params._id)
    })
  })

  Router.route('/product/new', function() {
    this.render('product_edit')
  })
}
