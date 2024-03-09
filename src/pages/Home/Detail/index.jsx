import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  name: "Detail",
  setup() {
    const list = [
      {
        icon: '/image/planCode.png',
        title: '计划编号',
        value: '218376214012'
      },
      {
        icon: '/image/address.png',
        title: '所属供电所',
        value: '江北供电所'
      },
      {
        icon: '/image/start.png',
        title: '停电开始时间',
        value: '2023-11-06 08:00'
      },
      {
        icon: '/image/end.png',
        title: '停电结束时间',
        value: '2023-11-06 20:00'
      },
      {
        icon: '/image/address.png',
        title: '工作地点',
        value: 'XXXXXXXXXXXXXXXX'
      },
      {
        icon: '/image/person.png',
        title: '预估用户数',
        value: '20'
      }
    ];

    return {
      list
    }
  },
  render() {
    console.log(this.list, '==lsi')
    return (
      <div id="Detail">
          <div className='head'>
            <img style={{ width: '1.25em', height: '1.25em'}} src="/image/info.png" />
            <div style={{ fontSize: '1em', marginLeft: '0.68em', fontWeight: 700, color: 'rgba(29, 170, 170, 1)'}}>详情</div>
          </div>

          <div className="content">
              {this.list?.map((item, index) => (
                <div className="row" key={index}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <img style={{ width: '0.75em', height: '0.75em'}} src={item?.icon} />
                    <div className="label">{item?.title}</div>
                  </div>
                  <div className="value">{item?.value}</div>
                </div>
              ))}

              <div className="btn">详情</div>
          </div>
      </div>
    );
  },
});
