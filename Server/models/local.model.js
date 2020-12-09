'use strict'

const mongoose = require( 'mongoose' )

const LocalSchema = new mongoose.Schema( {
  nome: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: false
  },
  logradouro: {
    type: String,
    required: false
  },
  contato: {
    type: String,
    required: false
  },
}, { collection: 'local' } )

LocalSchema.method( {
} )

LocalSchema.statics = {
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

module.exports = mongoose.model( 'Local', LocalSchema )