import { ReactNode } from "react";


/*
    #click-listener that will decide when to open or close the modal.
    #make a dynamic window component that will hold dynamic components


*/ 
interface IModal{
  setOpen: (name: string | null)=> void;
  children: ReactNode;
  windowName: string;
  activeModal: string | null;
}
export const Modal = ({setOpen, children, windowName, activeModal}: IModal) => {


  
  function handleClick(){
    setOpen(null)
  }

  if(windowName != activeModal) return null;

  return (
    <div style={{width:"400px", minHeight:"100vh", maxHeight:'auto', overflow:"scroll", border:"1px solid black", position:"absolute", right:"0" }}>
        <span>modal</span>
        <div style={{position:'absolute', 
          right:"10px", top:"10px", 
          border:"1px solid black", 
          padding:"5px", 
          cursor:"pointer"}} 
          onClick={handleClick}>x</div>
         <div>
            {children}
          </div> 
    </div>
  )
}
