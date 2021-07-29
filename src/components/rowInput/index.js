import React, { Component } from 'react';
import Input from '../input';

class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { label, nameInput, typeInput } = this.props
        return (
            <tr>
                <td>{label}</td>
                <td>:</td>
                <td>
                    <Input 
                        name={nameInput}
                        type={typeInput ? typeInput : "text"}
                    />
                </td>
            </tr>
        );
    }
}

export default RowInput;