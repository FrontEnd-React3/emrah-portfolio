import React, { Component} from 'react'
import "./Btn.css"
import translate from "../../i18nProvider/translate";

export class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addClass: false
    }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
    console.log(this)
  }
  render() {
    let boxClass = ["box"];
    if (this.state.addClass) {
      boxClass.push('green');
    }

    return (
      <div>
        <button onClick={this.toggle.bind(this)}>language menu</button>



        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "English " : ""}
        </div>
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Nederlands " : ""}

</div>
      </div>

    );
  }
}
export default EventBind