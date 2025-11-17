import React, { useState, useEffect } from 'react'
import Generate from './pages/Generate'
import AddEdit from './pages/AddEdit'
import Invoicing from './pages/Invoicing'
import Report from './pages/Report'
import System from './pages/System'
import Utility from './pages/Utility'
import Help from './pages/Help'
import Exit from './pages/Exit'

export function Link({ href, children, ...props }){
  return <a {...props} onClick={()=>navigate(href)}>{children}</a>
}

export function navigate(page){
  window.history.pushState({}, '', page)
  window.dispatchEvent(new Event("popstate"))
}

export function Router(){
  const [page,setPage]=useState(location.pathname.replace("/","") || "home")

  useEffect(()=>{
    const listener=()=> setPage(location.pathname.replace("/","") || "home")
    window.addEventListener("popstate", listener)
    return ()=> window.removeEventListener("popstate", listener)
  },[])

  switch(page){
    case "generate": return <Generate/>
    case "addedit": return <AddEdit/>
    case "invoicing": return <Invoicing/>
    case "report": return <Report/>
    case "system": return <System/>
    case "utility": return <Utility/>
    case "help": return <Help/>
    case "exit": return <Exit/>
    default: return <div>Welcome</div>
  }
}
