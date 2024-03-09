import { defineComponent } from "vue";
import './index.scss';



export default defineComponent({
  name: "FilterInfo",
  setup() {},
  render() {
    return (
      <div id="FilterInfo">
        <div className="pos">
          <div style={{ fontSize: '0.87em', color: 'rgba(29, 170, 170, 1)', fontWeight: 700}}>宁波市</div>
           <img style={{ width: '0.87em', height: '1em'}} src="/image/pos.png" />
        </div>

        <div className="date">
          <div className="text">2023-11-24</div>
          <img style={{ width: '1em', height: '1em'}} src="/image/date.png" />
          <div  className="text">至</div>
          <div  className="text">2023-11-24</div>
          <img style={{ width: '1em', height: '1em'}} src="/image/date.png" />
        </div>
      </div>
    );
  },
});
