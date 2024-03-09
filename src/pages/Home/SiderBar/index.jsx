import { defineComponent } from "vue";
import './index.scss';
import Tips from '../../../components/Tips/index';

export default defineComponent({
  name: "SiderBar",
  setup() {
    const list = [
      {
        title: '巡视'
      },
      {
        title: '检测'
      },
      {
        title: '缺陷',
        selected: true
      },
      {
        title: '检修'
      }
    ]
    return {
      list
    }
  },
  render() {
    return <div id="SiderBar">
      <div className="bar">
         {
          this.list?.map((item, idx) => <div key={idx} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', backgroundImage: `url('/image/${item?.selected ?'sider1.png' : 'sider1.png'}')`, width: '2.3em', height: '8.8em', backgroundSize: 'cover'}}>
            <div style={{ width: '0.1em', paddingLeft: '0.5em', fontSize: '0.87em', color: 'rgba(112, 112, 112, 1)'}}>{item?.title}</div>
         </div>)
         }
      </div>


       <div className="card">
        <div className="card1">
            <div style={{ display: 'flex'}}>
              <Tips />
              <div className="title">检修计划总览</div>
            </div>

            <div className="seq" />

            <div style={{ display: 'flex', alignContent: 'center'}}>
              <div className="planBtn">停电计划</div>
              <div className="planBtn2">不停电计划</div>
            </div>

            <div className="container">
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <img className="avatar" style={{ width: '0.87em', height: '0.87em', marginRight: '0.25em'}} src="/image/edit.png" />
                <div style={{ fontSize: '0.75em'}}>计划数</div>
              </div>

            <div>
              <span style={{ fontSize: '0.87em', fontWeight: 700, color: 'rgba(47, 181, 181, 1)'}}>4703</span>
              <span style={{ fontSize: '0.62em'}}>个</span>
            </div>
            </div>

            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>
              <div className="taskCard">
                <div className="row">
                  <img style={{ width: '0.75em', height: '0.75em'}} src='/image/op1.png' />
                  <div className="text">待执行</div>
                </div>

                <div>
                  <span className="num">206</span>
                  <span className="unit">个</span>
                </div>
              </div>

              <div className="taskCard" style={{ background: 'linear-gradient(180deg, rgba(235, 251, 255, 1) 0%, rgba(245, 251, 251, 1) 100%)'}}>
                <div className="row">
                  <img style={{ width: '0.75em', height: '0.75em'}} src='/image/op2.png' />
                  <div className="text">已开工</div>
                </div>

                <div>
                  <span className="num" style={{color: 'rgba(0, 133, 201, 1)'}}>3326</span>
                  <span className="unit">个</span>
                </div>
              </div>
            </div>


            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', marginTop: '0.56em'}}>
              <div className="taskCard" style={{ background: 'linear-gradient(180deg, rgba(235, 235, 235, 1) 0%, rgba(248, 248, 248, 1) 100%)'}}>
                <div className="row">
                  <img style={{ width: '0.75em', height: '0.75em'}} src='/image/op3.png' />
                  <div className="text">已延期</div>
                </div>

                <div>
                  <span className="num" style={{color: 'rgba(112, 112, 112, 1)'}}>1065</span>
                  <span className="unit">个</span>
                </div>
              </div>

              <div className="taskCard" style={{ background: 'linear-gradient(180deg, rgba(235, 255, 246, 1) 0%, rgba(245, 251, 251, 1) 100%)'}}>
                <div className="row">
                  <img style={{ width: '0.75em', height: '0.75em'}} src='/image/op4.png' />
                  <div className="text">已完工</div>
                </div>

                <div>
                  <span className="num" style={{color: 'rgba(42, 209, 114, 1)'}}>1065</span>
                  <span className="unit">个</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.4em',marginBottom: '0.62em', fontSize: '0.75em'}}>作业规范情况</div>

          </div>


          <div className="card2">
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <Tips />
              <div className="title">停电用户</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div style={{ fontSize: '0.87em'}}>低压用户数</div>
              <div style={{ fontSize: '0.87em'}}>敏感用户数</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
               <img style={{ width: '6.5em', height: '0.47em'}} src="/image/tl.png" />
                <img style={{ width: '6.5em', height: '0.47em'}} src="/image/tr.png" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <span style={{ color: 'rgba(103, 194, 58, 1)'}}>100</span>
                <span style={{ fontSize: '.75em'}}>个</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '5em', height: '5em',backgroundImage: `url('/image/circle.png')`,backgroundSize: 'cover', }}>
                  <img style={{ width: '1.6em', height: '2em'}} src="/image/ele.png" />
              </div>
               <div>
                 <span style={{ color: 'rgba(238, 105, 105, 1)'}}>200</span>
                <span style={{ fontSize: '.75em'}}>个</span>
               </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div style={{ fontSize: '0.87em'}}>中压用户数</div>
              <div style={{ fontSize: '0.87em'}}>重要用户数</div>
            </div>

             <div style={{ display: 'flex', justifyContent: 'space-between'}}>
               <img style={{ width: '6.5em', height: '0.47em'}} src="/image/bl.png" />
                <img style={{ width: '6.5em', height: '0.47em'}} src="/image/br.png" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div>
                 <span style={{ color: 'rgba(0, 133, 201, 1)'}}>200</span>
                <span style={{ fontSize: '.75em'}}>个</span>
               </div>

                <div>
                 <span style={{ color: 'rgba(47, 181, 181, 1)'}}>200</span>
                <span style={{ fontSize: '.75em'}}>个</span>
               </div>
            </div>


            <div className="box">
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <img style={{ width: '0.87em', height: '0.87em'}} src="/image/lower.png" />
                <div style={{ fontSize: '0.75em', marginLeft: '0.62em'}}>预估时户数(低压)</div>
              </div>

              <div>
                <span style={{ color: 'rgba(47, 181, 181, 1)', fontSize: '1.1em', fontWeight: 700}}>345</span>
                <span style={{ fontSize: '0.62em', marginLeft: '0.62em'}}>个</span>
              </div>
            </div>

            <div className="box">
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <img style={{ width: '0.87em', height: '0.87em'}} src="/image/middle.png" />
                <div style={{ fontSize: '0.75em', marginLeft: '0.62em'}}>预估时户数(中压)</div>
              </div>

              <div>
                <span style={{ color: 'rgba(47, 181, 181, 1)', fontSize: '1.1em', fontWeight: 700}}>345</span>
                <span style={{ fontSize: '0.62em', marginLeft: '0.62em'}}>个</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'1em'}}>

              <div style={{ width: '5em', fontSize: '0.65em'}}>
                <div>当月目标用户数</div>
                <div style={{ height: '0.8em'}} />
                <div>实际已消耗用户数</div>
              </div>

              <div style={{width: '13em', height: '4.75em', backgroundImage: `url('/image/lineBg.png')`,backgroundSize: 'cover', }}>
                  <div style={{ fontSize: '0.7em', color: 'rgba(46, 177, 177, 1)', marginLeft: '15em', fontWeight: 700}}>898</div>
                  <img style={{ width: '13em', height: '0.87em'}} src="/image/g1.png" />
                  <div style={{ fontSize: '0.7em', color: 'rgba(46, 177, 177, 1)', marginLeft: '5em', fontWeight: 700}}>400</div>
                  <img style={{ width: '13em', height: '0.87em', marginBottom: '2em'}} src="/image/g2.png" />
              </div>
            </div>

          </div>




          <div className="card3">
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <Tips />
              <div className="title">不停电作业占比</div>
            </div>

            <div className="seq" />

                <div style={{width: '13em', height: '4.75em', backgroundImage: `url('/image/line2Bg.png')`,backgroundSize: 'cover', }}>

                </div>

          </div>
        </div>

    </div>
  },
});
