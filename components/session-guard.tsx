"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SessionGuard({children}:{children:React.ReactNode}) {
  const router=useRouter();
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem('arena-unlocked')==='true') setReady(true);
    else router.replace('/unlock');
  },[router]);
  if(!ready) return <main style={{minHeight:'100vh',background:'#0A0A0F'}} aria-label="Vérification de session"/>;
  return <>{children}</>;
}
