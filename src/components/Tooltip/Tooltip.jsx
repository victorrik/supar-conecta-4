//@ts-check
import RCTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

// do not use rc-tooltip/lib/placements
import placements from 'rc-tooltip/lib/placements';

/**
 * @typedef {'hover'|'click'|'focus'} Triggers
 * @typedef {'left'|'right'|'top'|'bottom'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'} Placements
 * @param {{placement?:Placements,trigger?:Triggers,children:import('react').ReactNode,title:string}} TooltipProps - props de tooltip
 * @returns {JSX.Element} Tooltip
 */
const Tooltip = ({
	placement="right",
	trigger="hover",
	children,
	title
}) => { 
	return (
		<RCTooltip
          placement={placement}
          mouseEnterDelay={0}
          mouseLeaveDelay={0.1}
					trigger={trigger}
          // onVisibleChange={this.onVisibleChange}
          // align={{
          //   offset: [this.state.offsetX, this.state.offsetY],
          // }}
					//visible={true}
          overlay={<span className='text-white' >{title}</span>}
           
        >
          <span>
						{children}
					</span>
        </RCTooltip>
	)
}

// class Test extends Component {
//   state = {
//     destroyTooltipOnHide: false,
//     placement: 'right',
//     trigger: {
//       hover: 1,
//     },
//     offsetX: placements.right.offset[0],
//     offsetY: placements.right.offset[1],
//   };
//   onPlacementChange = (e) => {
//     const placement = e.target.value;
//     const offset = placements[placement].offset;
//     this.setState({
//       placement: e.target.value,
//       offsetX: offset[0],
//       offsetY: offset[1],
//     });
//   }
//   onTransitionChange = (e) => {
//     this.setState({
//       transitionName: e.target.checked ? e.target.value : '',
//     });
//   }
//   onTriggerChange = (e) => {
//     const trigger = { ...this.state.trigger };
//     if (e.target.checked) {
//       trigger[e.target.value] = 1;
//     } else {
//       delete trigger[e.target.value];
//     }
//     this.setState({
//       trigger,
//     });
//   }
//   onOffsetXChange = (e) => {
//     const targetValue = e.target.value;
//     this.setState({
//       offsetX: targetValue || undefined,
//     });
//   }
//   onOffsetYChange = (e) => {
//     const targetValue = e.target.value;
//     this.setState({
//       offsetY: targetValue || undefined,
//     });
//   }
//   onVisibleChange = (visible) => {
//     console.log('tooltip', visible); // eslint-disable-line no-console
//   }
//   onDestroyCheck = () => {
//     this.setState({
//       destroyTooltipOnHide: !this.state.destroyTooltipOnHide,
//     });
//   }
//   preventDefault = (e) => {
//     e.preventDefault();
//   }
//   render() {
//     const state = this.state;
//     const trigger = state.trigger;
//     return (<div>
//       <div style={{ margin: '10px 20px' }}>
//         <label>
//           placement:
//           <select value={this.state.placement} onChange={this.onPlacementChange}>
//             {Object.keys(placements).map((p) => {
//               return <option key={p} value={p}>{p}</option>;
//             })}
//           </select>
//         </label>
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <label>
//           <input
//             value="rc-tooltip-zoom"
//             type="checkbox"
//             onChange={this.onTransitionChange}
//             checked={this.state.transitionName === 'rc-tooltip-zoom'}
//           />
//           transitionName
//         </label>

//         &nbsp;&nbsp;&nbsp;&nbsp;

//         <label>
//           <input
//             type="checkbox"
//             onChange={this.onDestroyCheck}
//             checked={this.state.destroyTooltipOnHide}
//           />
//           destroyTooltipOnHide
//         </label>

//         &nbsp;&nbsp;&nbsp;&nbsp;

//         trigger:

//         <label>
//           <input
//             value="hover"
//             checked={trigger.hover}
//             type="checkbox"
//             onChange={this.onTriggerChange}
//           />
//           hover
//         </label>
//         <label>
//           <input
//             value="focus"
//             checked={trigger.focus}
//             type="checkbox"
//             onChange={this.onTriggerChange}
//           />
//           focus
//         </label>
//         <label>
//           <input
//             value="click"
//             checked={trigger.click}
//             type="checkbox"
//             onChange={this.onTriggerChange}
//           />
//           click
//         </label>
//         <br/>
//         <label>
//           offsetX:
//           <input
//             type="text"
//             value={state.offsetX}
//             onChange={this.onOffsetXChange}
//             style={{ width: 50 }}
//           />
//         </label>
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <label>
//           offsetY:
//           <input
//             type="text"
//             value={state.offsetY}
//             onChange={this.onOffsetYChange}
//             style={{ width: 50 }}
//           />
//         </label>
//       </div>
//       <div style={{ margin: 100 }}>
        
//       </div>
//     </div>);
//   }
// }
export default Tooltip