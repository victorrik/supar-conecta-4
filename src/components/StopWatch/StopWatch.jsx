//@ts-check
// import { PureComponent } from 'react'

// type DaProps = {
//   autoStart?: boolean ; // like this
// 	start?:any,
// 	stop?:any,
// 	reset?:any,
// 	getTime?:any
// }; 
// type State = {
//   time: number; // like this
// }; 

// class StopWatch extends PureComponent<DaProps> {
// 	interval:any = null;
// 	state:State = {
// 		time:0
//  }
// 	constructor(props:DaProps) {
// 		super(props)
// 		this.start = this.start.bind(this);
// 		this.stop = this.stop.bind(this);
// 		this.reset = this.reset.bind(this);
// 		this.getTime = this.getTime.bind(this);
// 	}
// 	componentDidMount(){
// 		if (this.props.autoStart) {
// 			this.start();
// 		}
// 	}
// 	componentWillUnmount(){
// 		if (this.interval) {
// 			clearInterval(this.interval)
// 		}
// 	}
// 	start():void{
// 		this.interval = setInterval(() => {
// 			this.setState({time:this.state.time + 10})
// 		}, 10);
// 	}
// 	stop():void{
// 		clearInterval(this.interval); 
// 	}
// 	reset():void{
// 		clearInterval(this.interval); 
// 		this.setState({time:0});
// 		this.interval = setInterval(() => {
// 			this.setState({time:this.state.time + 10})
// 		}, 10);
// 	}
// 	getTime():number{
// 		return this.state.time
// 	}
// 	render() {
// 		return (
// 			<div className="stopwatch">
// 				<div className="numbers">
// 					<div><i>{("0" + Math.floor((this.state.time / 60000) % 60)).slice(-2)}</i></div>
// 					<span>:</span>
// 					<div><i>{("0" + Math.floor((this.state.time / 1000) % 60)).slice(-2)}</i></div>
// 					<span>:</span>
// 					<div><i>{("0" + ((this.state.time / 10) % 100)).slice(-2)}</i></div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
 

// export default StopWatch



const StopWatch = () => {
	return (
		<div>StopWatch</div>
	)
}

export default StopWatch