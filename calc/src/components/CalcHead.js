import React, { Component } from 'react';

class CalcHead extends Component {

    static defaultProps = {
        head_text:[],
    }

    render() {
        return (
            <div>
                <input type="text" />
            </div>
        );
    }
}
export default CalcHead;