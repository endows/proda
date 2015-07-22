AutoForm.hooks({
  'productEdit': {
    onSuccess:function(){
      $('#myModal').modal('hide')
    }
  }
});
