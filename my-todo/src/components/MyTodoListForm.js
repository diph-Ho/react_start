import React, { Component, Fragment } from 'react';


class MyTodoListForm extends Component {

    state = {
        checking: false,
        desc_todo:'',
    }

    handleRemove = () => {
        const {mytodo_list, onRemove} = this.props;
        onRemove(mytodo_list.id);
    }

    handleCheck = () => {
        this.setState({
            checking: !this.state.checking
        })
    }

    render() {

        const {desc_todo} = this.props.mytodo_list;
        const {checking} = this.state;



        return (
            <div class="form-check form-check-inline">
                {
                    checking ? (
                        <Fragment>
                                <input
                                    class="form-check-input"
                                    type='checkbox'
                                    checked={checking}
                                    onChange={this.handleCheck}
                                />
                            <label class="form-check-label text-danger">
                                <del>{desc_todo}</del>
                            </label>
                            <button type="btn" class="close" onClick={this.handleRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="red" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
                                </svg>
                            </button>
                        </Fragment>
                        
                    ) : (
                        <Fragment>
                                <input
                                    class="form-check-input"
                                    type='checkbox'
                                    checked={checking}
                                    onChange={this.handleCheck}
                                />
                            <label class="form-check-label">
                                {desc_todo}
                            </label>
                            <button type="btn" class="close" onClick={this.handleRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="red" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
                                </svg>
                           </button>
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

export default MyTodoListForm;