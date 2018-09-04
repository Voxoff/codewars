function f(inp) {
  let s=inp.split("").reduce((a,c)=>(a+c.charCodeAt()),0)
  let m=s%256;
  return [m, 2*m%256,3*m%256,4*m%256]
}


  let s = 0; inp.split("").forEach((i)=>s+=i.charCodeAt())
  inp.split("").map((i)=>i.charCodeAt()).reduce((a,c)=>(a+c))
