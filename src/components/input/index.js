import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { name, type } = this.props
        return (
            <input
                name={name}
                type={type}
                // value=""
                // onChange=""
            />
        );
    }
}

export default Input;