"use client";

import { useState } from "react";

export function useStatus(){

const [loading,setLoading]=useState(false);

return{

loading,

setLoading

};

}
