import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class JobComponent extends Component {
  @tracked businessName = "";
  @tracked role;
  @tracked primaryBusiness;
  @tracked techBackground;
  
  @tracked isTech = false;

  @action
  changeValue(key, e) {
    this[key] = e.target.value;
    this.isTech = (this.role === 'Product Manager' && this.primaryBusiness === 'Software development') || this.role === 'Fullstack Engineer';
  }

  @action
  submitForm(e) {
    e.preventDefault();
    if(this.businessName && this.role && this.primaryBusiness) {
      this.techBackground != undefined ?
        alert(`Created job posting with the following information: ${this.businessName}, ${this.role}, ${this.primaryBusiness}, ${this.techBackground}`)
      : alert(`${this.businessName}, ${this.role}, ${this.primaryBusiness}`)

    } else {
      alert('Not all fields are filled in!');
    }
  }

}