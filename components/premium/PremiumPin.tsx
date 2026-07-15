"use client";

import { useState } from "react";

export default function PremiumPin() {

const [pin,setPin]=useState("");

const [result,setResult]=useState("");

function unlock(){

if(pin==="0000"){

setResult("Premium Unlocked");

}else{

setResult("Wrong PIN");

}

}

return(

<div>

<input
type="password"
placeholder="Enter Premium PIN"
value={pin}
onChange={(e)=>setPin(e.target.value)}
/>

<button onClick={unlock}>

Unlock

</button>

<p>{result}</p>

</div>

);

}
