import React from 'react';
import './FormTextarea.scss';

class FormTextarea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            currentLength: 0
        };
        this.textAreaRef = React.createRef();
    }

    componentDidMount() {
        this.autosize(this.textAreaRef.current);
    }

    autosize(){
        const el = this.textAreaRef.current;
        setTimeout(() => {
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }

    onInput(e) {
        this.props.onUpdate(e.target.value);
        this.autosize();
        this.setState({
            error: !this.props.validate(e.target.value) || this.props.max < e.target.value.length,
            currentLength: e.target.value.length
        });
    }

    render() {
        return (
            <div>
                <div className="FormTextarea__wrapper">
                    <textarea
                        rows="1"
                        ref={this.textAreaRef}
                        onInput={this.onInput.bind(this)}
                        className={`FormTextarea__input ${this.props.type === 'small' ? 'FormTextarea__input--small' : ''}`}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                    />
                    {this.props.max > 0 ? <div className="FormTextarea__count">{this.state.currentLength}</div> : null}
                </div>
                {this.state.error ? <div className="FormTextarea__error">Неправильно заполнено поле</div> : null}
            </div>
        );
    }


}

export default FormTextarea;