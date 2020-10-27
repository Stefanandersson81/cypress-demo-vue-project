/// <reference types="cypress"/>

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
//test suite
describe('Test suite', function(){

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.chechTitleOfIndexPage(cy)
    })

// test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, 'Admin', 'Ultimate6', 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
})