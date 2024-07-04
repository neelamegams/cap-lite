module.exports = function (){
    // Register your event handlers in here, for example, ...
    this.after ('each','Books', book => {
      if (book.stock > 100) {
        book.title += ` -- 11% discount!`
      }
    })
  }