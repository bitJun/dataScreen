import { defineComponent } from "vue";
import './index.scss';

import Tips from '../../components/Tips/index';



export default defineComponent({
  name: "Card",
  setup() {},
  props: {
    title: ''
  },
  render() {
    console.log(this.title, '===asdas')
    return (
      <div id="Card">
        <div className="header">
          <Tips />
         <div className="title">{this.title}</div>
        </div>

         <div className="seq" />
      </div>
    );
  },
});
