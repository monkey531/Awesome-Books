import { DateTime } from './luxon.js';

const dateTime = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');
document.getElementById('date').innerHTML = Date();

export default dateTime;