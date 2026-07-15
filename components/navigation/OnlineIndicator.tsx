interface Props{
online:boolean;
}

export default function OnlineIndicator({
online
}:Props){

return(

<span>

{online ? "🟢 Online" : "⚫ Offline"}

</span>

);

}
