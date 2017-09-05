import {View} from 'backbone';
import $ from 'jquery';
import template from 'text-loader!./templates/template.html'
import './css/main.css'

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