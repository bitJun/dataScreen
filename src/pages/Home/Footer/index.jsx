import { defineComponent } from "vue";
import './index.scss';



export default defineComponent({
  name: "Footer",
  setup() {},
  render() {
    return (
      <div id="Footer">
        <div style={{ display: 'flex'}}>
          <div className="planBtn2">地图首页</div>
          <div style={{ paddingLeft: '1em'}}>无地图首页</div>
        </div>
      </div>
    );
  },
});
