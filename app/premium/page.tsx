"use client";

import { useState } from "react";

export default function PremiumPage() {

const [pin,setPin]=useState("");

const [message,setMessage]=useState("");

function unlock(){

if(pin==="0000"){

setMessage("✅ Premium Unlocked");

}else{

setMessage("❌ Wrong PIN");

}

}

return(

<main>

<h1>⭐ Premium</h1>

<input

type="password"

placeholder="Enter PIN"

value={pin}

onChange={(e)=>setPin(e.target.value)}

/>

<button onClick={unlock}>

Unlock

</button>

<p>{message}</p>

</main>

);

}
