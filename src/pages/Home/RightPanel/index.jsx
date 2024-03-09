import { defineComponent,ref } from "vue";
import './index.scss';
import Tips from '../../../components/Tips/index';

export default defineComponent({
  name: "RightPanel",
  setup() {
    const currentTab = ref('0'); // 0 代表单位对比  1 计划列表
    const changeTab = (tab) => {
      currentTab.value = tab; // 更新当前选中的选项卡
    };

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


    return  {
      list,
      currentTab,
      changeTab
    }


  },
  render() {
    const checkedStyle = {borderRadius: '2.5em', color: '#fff', background: ' rgba(80, 203, 203, 1)', boxShadow: 'inset 0px 2px 6px  rgba(0, 141, 141, 1)'};
    return (
      <div id="RightPanel">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <Tips />
            <div className="title" style={{ marginLeft: '1em'}}>停电用户列表</div>
          </div>

          <div className="tabBox">
            <div className="tabText" style={this.currentTab == 0 && checkedStyle} onClick={() => this.changeTab('0')}>单位对比</div>
            <div className="tabText" style={this.currentTab == 1 && checkedStyle} onClick={() => this.changeTab('1')}>计划列表</div>
          </div>
        </div>
      <div className="seq" />

      {this.currentTab == 0 && <div style={{ display: 'flex', alignItems: 'center'}}>
          <div style={{ fontSize: '0.75em'}}>海曙区</div>
          <div style={{ marginTop: '0.3em', position: 'relative'}}>
             <img style={{ width: '13.8em', height: '1em'}} src="/image/p1.png" />
             <div style={{ position: 'absolute', right: '1em', top: '-0.4em', fontWeight: 700, color: 'rgba(103, 194, 58, 1)'}}>80%</div>
          </div>
        </div>
      }
      {
        this.currentTab == 1 && <div>
          <div className="search">
            <div style={{ fontSize: '0.87em'}}>根据线路、工作负责人模糊搜索</div>
             <img style={{ width: '1em', height: '1em'}} src="/image/search.png" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75em'}}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <div style={{ fontSize: '0.87em', color: 'rgba(29, 170, 170, 1)'}}>电压等级</div>
              <div style={{ fontSize: '0.87em', color: 'rgba(112, 112, 112, 1)', marginLeft: '1.1em', marginRight: '2em'}}>10kw</div>
              <div style={{ fontSize: '0.87em', color: 'rgba(112, 112, 112, 1)'}}>4kw</div>
            </div>
              <img style={{ width: '0.56em', height: '0.56em'}} src="/image/expanded.png" />
          </div>
           <div className="seq" />

           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{ fontSize: '0.87em'}}>搜索结果</div>
              <img style={{ width: '0.56em', height: '0.56em'}} src="/image/expanded.png" />
           </div>

           <div>
            <div className="searchRes">
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <img style={{ width: '1em', height: '1em'}} src="/image/ele.png" />
                <div style={{ fontSize: '0.87em', marginLeft: '.3em'}}>风华线</div>
              </div>
              <div className="btn">待执行</div>
            </div>
           </div>
           <div className="content" style={{ marginTop: '0.43em'}}>
              {
                this.list?.map((item, index) =>  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.3em'}} key={index}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <img style={{ width: '0.75em', height: '0.75em'}} src={item?.icon} />
                    <div style={{ fontSize: '0.87em', color: 'rgba(112, 112, 112, 1)'}}>{item?.title}</div>
                  </div>
                  <div style={{ fontSize: '0.87em', color: 'rgba(0, 0, 0, 1)'}}>{item?.value}</div>
                </div>)
              }
           </div>
        </div>
      }
      </div>
    );
  },
});
