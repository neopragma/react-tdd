// Sample structure of a unit test file for React components
import { Pie } from '../src/Pie'
import React from 'react'
import ReactDOM from 'react-dom'

describe('Pie component', () => {
    it('displays information about applie pie', () => {
        const container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(<Pie id={1} />, container)
        expect(container.textContent).toMatch("")
    })
})