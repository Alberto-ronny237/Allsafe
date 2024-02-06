import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import "./SobreEmpresa.css"

const SobreEmpresa = () => {
  return (
    <div className='containerSobre'>
    <div>
      <h1 className='sobreTitulo'>Allsafe</h1>
      <h2 className='sobreSubTitulo'>Tecnologias de Informação à medida das suas necessidades</h2>
    </div>

    <div className='containerEspecialista'>
      <h2 className='especialistaTitulo' >SOMOS ESPECIALISTAS</h2>

      <p className='paragrafoEspecialista'>
      DESENVOLVEMOS PROJECTOS EM TODOS OS RAMOS TECNOLÓGICOS
      DE PEQUENAS IDEIAS A GRANDES EMPRESAS!
      </p>
    </div>
    
    <div className='green'  > < IoChevronDown style={{fontSize:'20px', marginTop:'10px'}}/>
    </div>


    

    </div>
  )
}

export default SobreEmpresa