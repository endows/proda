Products = new Mongo.Collection("products");
Products.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "タイトル",
    max: 50
  },
  desc: {
    type: String,
    label: "説明",
    max: 200,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 3
      }
    }
  },
  url: {
    type: SimpleSchema.RegEx.Url,
    label: "URL",
    max: 200
  },
  icon: {
    type: String,
    label:"アイコン",
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: '画像をアップロード'
      }
    }
  }
}));
