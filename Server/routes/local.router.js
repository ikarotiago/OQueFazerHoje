'use strict'

const express = require( 'express' )
const router = express.Router()
const localCtrl = require( '../controllers/local.controller' )

/* ALL */ 
router.all( '*', ( req, res, next ) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*' )
  res.setHeader( 'Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS' )
  res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' )
  next()
} )

/* POST local insert*/ 
router.post( '/', ( req, res, next ) => localCtrl.create( req, res, next ) )

/* GET local listing. */
router.get( '/', ( req, res, next ) => localCtrl.read( req, res, next ) )

/* GET load local*/ 
router.get( '/:id', ( req, res, next ) => localCtrl.load( req, res, next ) )

/* PUT local update*/
router.put( '/:id', ( req, res, next ) => localCtrl.update( req, res, next ) )

/* DELETE local delete*/
router.delete( '/:id', ( req, res, next ) => localCtrl.delete( req, res, next ) )

module.exports = router
