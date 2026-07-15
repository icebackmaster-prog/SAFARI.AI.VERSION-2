"use client";

import { useState } from "react";

export function useReaction(){

const [count,setCount]=useState(0);

return{

count,

setCount

};

}
