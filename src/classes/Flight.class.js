import Moment from 'moment';

export default class Flight{
	constructor(options){
		options.id !== void(0) ? this.id = options.id : this.id = Date.now();

		if (options.direction){
			this.direction = options.direction;
		}else if(options.from && options.to){
			this.direction = {
				from: options.from,
				to: options.to
			};
		} else{
			this.direction = {from: '', to: ''};
		}

		options.departure ? this.departure = Moment(options.departure) : this.departure = null;
		options.arrival ? this.arrival = Moment(options.arrival) : this.arrival = null;
		this.carrier = options.carrier || '';
	}
}
