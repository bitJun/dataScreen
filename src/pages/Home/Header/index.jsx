import { defineComponent } from "vue";
import './index.scss';

export default defineComponent({
  name: "Header",
  setup() {
    const list = [
      {
        title: '标准化建设',
        icon: '/image/tab1.png',
      },
      {
        title: '精益化运维',
        icon: '/image/tab2.png',
        selected: true
      },
      {
        title: '智能化管控',
        icon: '/image/tab3.png'
      },
      {
        title: '源网荷储',
        icon: '/image/tab4.png'
      }
    ]

    return {
      list
    }
  },
  render() {
    console.log("hello");

    const RowStyle = {display: 'flex', alignItems: 'center', width: '12em', justifyContent: 'center'};
    const SelectedStyle = {...RowStyle, height: '1.8em', border: '1px solid rgba(181, 238, 238, 1)', background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(86, 222, 222, 0.2) 100%)', opacity: 0.73, borderRadius: '2em' }

    return <div id="Header">
      <div className="logo-box">
        <img className="logo" src="/image/logo.png" />
      </div>

      <div className="title">数字化配电网</div>

      <div className="box">作业数字化</div>

      <div className="tabBox">
        {this.list?.map((item, index) => <div key={index} style={item?.selected ? SelectedStyle : RowStyle}>
          <img className="avatar" style={{ width: '0.87em', height: '0.87em', marginRight: '0.25em'}} src={item?.icon} />
          <div style={{ color: item?.selected ? 'rgba(29, 170, 170, 1)' : 'rgba(112, 112, 112, 1)'}}>{item?.title}</div>
        </div>)}
      </div>

      <div className="search">
        <div>全局搜索</div>
        <div style={{ color: 'rgba(29, 170, 170, 1)'}}>重置</div>
      </div>

       <img className="avatar" style={{ marginLeft: '1.75em'}} src="/image/avatar.png" />

       <div style={{ marginLeft: '0.5em', marginRight: '0.8em'}}>张三</div>
        <img className="avatar" src="/image/warn.png" />
        <img className="avatar" style={{ marginLeft: '1.25em', marginRight: '1.25em'}} src="/image/setting.png" />
        <img className="avatar" src="/image/off.png" />
    </div>
  },
});
