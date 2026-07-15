interface Props{

name:string;

email:string;

}

export default function UserProfile({

name,

email

}:Props){

return(

<div>

<h2>{name}</h2>

<p>{email}</p>

</div>

);

}
