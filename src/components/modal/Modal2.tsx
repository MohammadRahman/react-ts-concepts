/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";


/*
  create the context
  provider and get all the state elements
  get the isolated button component
  get the isolated window component
*/ 

interface IModalContext{
  openModal:(name: string)=> void;
  closeModal:()=> void;
  modalName: string;
}

const ModalContext = createContext<IModalContext | null>(null)

interface IModal{
  children: ReactNode;
}
function Modal({children}: IModal){
  const [modalName, setModalName] = useState("");

function openModal(name: string){
  setModalName(name);
}

function closeModal(){
  setModalName("")
}
return <ModalContext.Provider value={{openModal, closeModal, modalName}}>
  {children}
</ModalContext.Provider>

}
interface IOpen{
  children: ReactElement<{ onClick?: () => void }>;
activeModal: string;
}
function Open({children, activeModal}: IOpen){
  const {openModal} = useContext(ModalContext) as IModalContext;

  return cloneElement(children, { onClick: ()=> openModal(activeModal) })
}

interface IWindow{
  children: ReactElement<{ onClick?: () => void }>;
  windowName: string;
}

function Window({children, windowName}: IWindow){
  const {closeModal, modalName} = useContext(ModalContext) as IModalContext;

  if(modalName !=  windowName) return;

  return createPortal(
    <div style={{
      width:"400px",
       minHeight:"100vh",
        maxHeight:'auto', 
        overflow:"scroll", 
        border:"1px solid black", 
        position:"absolute", 
        right:"0",
        top: "0" }}>
       <div style={{position:'absolute', 
          right:"10px", top:"10px", 
          border:"1px solid black", 
          padding:"5px", 
          cursor:"pointer"}}
          onClick={closeModal}
          >
          x  
          </div>   
          <div>
            {cloneElement(children as any, {onClick: ()=> closeModal})}
          </div>
    </div>,
    document.body
  )
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;