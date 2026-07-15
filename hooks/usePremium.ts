"use client";

import { useState } from "react";

export function usePremium(){

const [premium,setPremium]=useState(false);

return{

premium,

setPremium

};

}
