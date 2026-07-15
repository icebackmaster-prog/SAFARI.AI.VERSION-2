interface Props{

username:string;

email:string;

}

export default function ProfileCard({

username,

email

}:Props){

return(

<div className="profile-card">

<h2>{username}</h2>

<p>{email}</p>

</div>

);

}
