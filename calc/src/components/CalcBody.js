import React, { Component, Fragment } from 'react';

class CalcBody extends Component {

    render() {
        return (
            <Fragment>
                <form >
                    <table>
                        <tbody>
                            <tr>
                                <td><button onClick={handleClick} className='btn'>c</button></td>
                                <td><button className='btn'>/</button></td>
                                <td><button className='btn'>*</button></td>
                                <td><button className='btn'>-</button></td>
                            </tr>
                            <tr>
                                <td><button className='btn'>7</button></td>
                                <td><button className='btn'>8</button></td>
                                <td><button className='btn'>9</button></td>
                                <td rowSpan='2'><button className='btn'>+</button></td>
                            </tr>
                            <tr>
                                <td><button className='btn'>4</button></td>
                                <td><button className='btn'>5</button></td>
                                <td><button className='btn'>6</button></td>
                            </tr>
                            <tr>
                                <td><button className='btn'>1</button></td>
                                <td><button className='btn'>2</button></td>
                                <td><button className='btn'>3</button></td>
                                <td rowSpan='2'><button className='btn'>=</button></td>
                            </tr>
                            <tr>
                                <td colSpan='2'><button className='btn'>0</button></td>
                                <td><button className='btn'>.</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Fragment>
        );
    }
}

export default CalcBody;