
import './App.css'
import ButtonFatec from './componentes/ButtonFatec'
import CustomImput from './componentes/CustomImput'

function App() {
  const msg = 'Entre em contato'
 

  return (
    <>
      
      <p >
        {msg}
      </p>
      <hr/>
      <CustomImput type="text" placeholder="Nome" /><br/>
      <CustomImput type="text" placeholder="e-mail" /><br/>
      <CustomImput type="text" placeholder="telefone" /><br/>
      <hr/>
      <ButtonFatec type="button" label="Enviar mensagem"/>
      
    </>
  )
}

export default App
