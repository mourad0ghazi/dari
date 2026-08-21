"use client";

import { LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SessionGuard({children}:{children:React.ReactNode}) {
  const router=useRouter();
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    try {
      if(localStorage.getItem('arena-unlocked')==='true') setReady(true);
      else router.replace('/unlock');
    } catch {
      router.replace('/unlock');
    }
  },[router]);
  if(!ready) return <main className="guard" aria-label="Vérification de session"><div><i><LockKeyhole size={20}/></i><b>ARENA</b><span>VÉRIFICATION DE TON ESPACE</span></div><style jsx>{`.guard{min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 50% 38%,rgba(212,175,55,.1),transparent 24%),#0a0a0f;color:#f5f5f0}.guard div{text-align:center;display:grid;place-items:center;gap:10px}.guard i{width:46px;height:46px;border:1px solid rgba(212,175,55,.32);border-radius:14px;display:grid;place-items:center;color:#d4af37;box-shadow:0 0 25px rgba(212,175,55,.13);animation:guardPulse 1.4s cubic-bezier(.16,1,.3,1) infinite alternate}.guard b{font:700 15px 'Plus Jakarta Sans';letter-spacing:.16em}.guard span{font:10px 'JetBrains Mono';letter-spacing:.11em;color:#9ca3af}@keyframes guardPulse{to{transform:scale(1.06);box-shadow:0 0 34px rgba(212,175,55,.25)}}`}</style></main>;
  return <>{children}</>;
}
