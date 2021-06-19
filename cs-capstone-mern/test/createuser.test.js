// https://javascript.plainenglish.io/unit-testing-node-js-mongoose-using-jest-106a39b8393d

import '@testing-library/jest-dom';
import React from 'react';

const createUser = require('../backend/routes/users')
const User = require('../backend/models/user.model')
const db = require('../backend/server')


beforeAll(async () => await db.connect())

afterEach(async () => await db.clearDatabase())

afterAll(async () => await db.closeDatabase())

describe('User Created When', () => {
    it('First User', async done => {
        const { userId } = await createUser("Username", "FirstName", "LastName", 45)

        // Find user in database
        const user = await User.findById(userId)

        // Check the username, first name, last name, and age
        expect(user.username).toEqual("Username")
        expect(user.firstname).toEqual("FirstName")
        expect(user.lastname).toEqual("LastName")
        expect(user.age).toEqual(45) 
        done()
    })
})