import {View} from 'backbone';
import template from 'text-loader!./templates/template.html';
import './css/main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AppView extends View {
  constructor ($el){
    super();
    this.$el = $el
    this.template = _.template(template)
  }
  render(){
    this.$el.append(this.template())
  }
}

let view = new AppView($('#app'))
view.render()