interface Props{

message:string;

}

export default function ChatMessage({

message

}:Props){

return(

<div>

{message}

</div>

);

}
