'use strict'

const mongoose = require( 'mongoose' )

const UserSchema = new mongoose.Schema( {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdAt :{
    type: Date,
    default: Date.now
  }
}, { collection: 'user' } )

UserSchema.method( {
} )

UserSchema.statics = {
  get ( id ) {
    return this.findById( id, {'__v': 0} )
      .exec()
  },
  list ( { skip = 0, limit = 50 } = {} ) {
    return this.find( {}, { '__v': 0 } )
    .skip( skip )
    .limit( limit )
    .exec()
  }
}

module.exports = mongoose.model( 'User', UserSchema )