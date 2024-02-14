import { Component } from "react"
import './calculator.css'

import Button from "../components/Button"
import Display from "../components/Display"
import { toNumber } from "lodash"

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {

        if (operation === '=') {
            if(this.state.values[0]===0) return
            this.setState({ displayValue: eval(`${this.state.values[0]} ${this.state.operation} ${this.state.values[1]}`),values:[eval(`${this.state.values[0]} ${this.state.operation} ${this.state.values[1]}`),0],operation:null })
        } else {
            if (this.state.values[0] === 0)
                this.setState({ values: [toNumber(this.state.displayValue), 0], operation: operation ,displayValue:'0'})

            else {
                if(this.state.operation)
                {
                    if(this.state.operation==='/' && this.state.displayValue==='0')return
                    this.setState({ displayValue:'0',values: [eval(`${this.state.values[0]} ${this.state.operation} ${toNumber(this.state.displayValue)}`), 0], operation: operation })
                }
                else this.setState({displayValue:'0',operation:operation})
            }
        }


    }
    addDigit(n) {

        if(n==='.' && this.state.displayValue.includes('.')){
            return
        }
            if (this.state.values[1]===0) {
                if(this.state.displayValue!=='0') this.setState({ displayValue: n, values: [0, toNumber(n)] })
                else
                this.setState({ displayValue: n, values: [this.state.values[0], toNumber(n)] })
            }
            else {console.log(this.state.values[0], toNumber(n))
                this.setState({ displayValue: this.state.displayValue + n, values: [this.state.values[0], toNumber(this.state.displayValue + n)] })}
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = operation => this.setOperation(operation)
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button className='button triple' label='AC' click={() => this.clearMemory()} />
                <Button className='button operation' label='/' click={setOperation} />
                <Button className='button' label='7' click={addDigit} />
                <Button className='button' label='8' click={addDigit} />
                <Button className='button' label='9' click={addDigit} />
                <Button className='button operation' label='*' click={setOperation} />
                <Button className='button' label='4' click={addDigit} />
                <Button className='button' label='5' click={addDigit} />
                <Button className='button' label='6' click={addDigit} />
                <Button className='button operation' label='-' click={setOperation} />
                <Button className='button' label='1' click={addDigit} />
                <Button className='button' label='2' click={addDigit} />
                <Button className='button' label='3' click={addDigit} />
                <Button className='button operation' label='+' click={setOperation} />
                <Button className='button double' label='0' click={addDigit} />
                <Button className='button' label='.' click={addDigit} />
                <Button className='button operation' label='=' click={setOperation} />

            </div>
        )
    }
}