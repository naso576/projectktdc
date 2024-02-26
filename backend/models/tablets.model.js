

module.exports = mongoose =>{

    
    var schema = mongoose.Schema(
        {
        
            tabletName : String,
            Composition : String,
          
        }, { timestamps: true }
      );

      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });

      const tablets_list = mongoose.model("tablets_list", schema);
      return tablets_list;

}