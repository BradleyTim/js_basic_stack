const stack = {
  
  count: 0,
  store: {},

  add: function(obj){
    this.store[this.count] = obj;
    this.count++;
    return this.store;    
  },

  del: function(){
     if(this.count === 0){
       return undefined;
     }

     this.count--;
     var result = this.store[this.count];
     delete this.store[this.count];
     return result;

    /*const key = Object.keys(this.store).length - 1;
    const value = this.store[key];
    delete this.store[key];
    return value;*/
  },

  len: function(){
    return this.count;
  },

  peek: function(){
    return this.store[this.count - 1];
  }
};

