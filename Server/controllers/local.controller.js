'use strict'

const Local = require( '../models/local.model' );

/**
* Cria um novo local
* @property {string} req.body.nome - Nome do local
* @property {string} req.body.bairro - Bairro do local
* @property {string} req.body.logradouro - Logradouro do local
* @property {string} req.body.contato - Contato do local
* @return {Local}
*/
async function create ( req, res, next ) {
  try {
    const local = new Local( req.body )
    res.json( await local.save( local ) )
  } catch ( error ) {
    console.error( "ERROR function create local.controller", error )
  }
}

/**
* Atualiza um local existente
* @property {string} req.body.nome - Nome do local
* @property {string} req.body.bairro - Bairro do local
* @property {string} req.body.logradouro -Logradouro do local
@property {string} req.body.contato - Contato do local
* @return {Local}
*/
async function update ( req, res, next ) {
  try {
    let id = req.body._id
    const local = new Local( req.body )
    res.json( await Local.findByIdAndUpdate( id, local, { new: true } ) )
  } catch ( error ) {
    console.error( "ERROR function update local.controller: ", error)
    next(error)
  }
}

/**
* Lista de usuários
* @param {number} skip - Número de locais a ser pulados
* @param {number} limit - Número limite de locais
* @retun {Local[]}
**/
async function read ( req, res, next ) {
  try {
    const { limit = 50, skip = 0 } = req.query
    res.json( await Local.list( { limit, skip } ) )
  } catch (  error ) {
    console.error( "ERROR function read local.controller: ", error )
    next(error)
  }
}

/**
* Delete um usuário
* @returns {Local}
*/ 
async function _delete ( req, res, next ) {
  try {
    let id = req.params.id
    res.json( await Local.findOneAndDelete( { _id: id } ) )
  } catch (  error ) {
    console.error( "ERROR function delete local.controller: ", error )
    next( error )
  }
}

/**
* Recupera um unico usuário
* @returns {Local}
*/
async function load ( req, res, next ) {
  try {
    let id = req.params.id
    res.json( await Local.get( id ) )
  } catch ( error ) {
    console.error( "ERROR function load local.controller: ", error )
    next(error)
  }
} 

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: _delete,
  load: load
}