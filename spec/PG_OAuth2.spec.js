/* globals require */

/*!
 * Module dependencies.
 */

var cordova = require('./helper/cordova');
var PG_OAuth2 = require('../www/pg-oauth2');


/*!
 * Specification.
 */

describe('phonegap-plugin-oauth2', function () {

    beforeEach(function () {

    });

    describe('PG_OAuth2', function () {
        it('should exist', function () {
            expect(PG_OAuth2).toBeDefined();
            expect(typeof PG_OAuth2 === 'object').toBe(true);
        });

        it('should contain an `authenticate` function', function () {
            expect(PG_OAuth2.authenticate).toBeDefined();
            expect(typeof PG_OAuth2.authenticate === 'function').toBe(true);
        });
    });
});
