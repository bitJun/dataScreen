import { defineComponent } from "vue";
import './index.scss';



export default defineComponent({
  name: "Tips",
  setup() {},
  render() {
    return (
      <div id="Tips">
        <div className="dot"></div>
        <div className="tips"></div>
      </div>
    );
  },
});
