interface Props{
count:number;
}

export default function NotificationBadge({
count
}:Props){

return(

<div className="notification-badge">

🔔 {count}

</div>

);

}
