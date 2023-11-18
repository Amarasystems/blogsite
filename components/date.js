import { parseISO, format } from "date-fns";
import moment from "moment";

export default function Date({dateString}){
    moment.locale("mn");
    const date = parseISO(dateString);
    // return <time dateTime={dateString}>{moment(dateString).format("MMM Do YY")}</time>
    return <time className="date" dateTime={dateString}>{format(date, 'yyyy оны LL сарын dd HH:mm ')}</time>
}
