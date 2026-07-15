interface Props{

message:string;

}

export default function FeedbackCard({

message

}:Props){

return(

<div>

<p>{message}</p>

</div>

);

}
