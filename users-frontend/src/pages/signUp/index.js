import './styles.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

import PhotoInput from '../../components/photoInput';
//import Pagination from "./components/pagination"

import { getCepData } from '../../services/viacep';
//import { getUsers } from "./services/users"

function SignUp() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [photo, setPhoto] = useState();
  // const [users, setUsers] = useState([]);
  //const [page, setPage] = useState(1);
  const history = useHistory();  

  // useEffect( () => {
  //   async function loadUserList() {
  //    const usersBackend = await getUsers(page); 
  //    setUsers(usersBackend)
  //   }

  //   loadUserList();
  // },[page]);

  function handleSubmit(e) {
    e.preventDefault();

    history.push("/login")
  }
  
  async function onBlurCep() {          
    const data = await getCepData(cep);
    setLogradouro(data.logradouro);
  }

  return (
    <div id="background" className="background">        
      <form id="formSignup" onSubmit={handleSubmit}>
        <PhotoInput 
          photo={photo} 
          onPhotoChange={(newPhoto) => setPhoto(newPhoto)}
        />    
        <span id="userErrorSignup" className="error">Usuário incorreto</span>
        <input id="userSignup" type="text" placeholder="Digite seu usuário"/> 
        <span id="passwordErrorSignup" className="error">Senha incorreta</span>       
        <input id="passwordSignup" type="password" placeholder="Digite sua senha"/>
       
        <input 
          id="cep" 
          type="text" 
          onBlur={onBlurCep} 
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        /> 
        <input 
          id="logradouro" 
          type="text" 
          placeholder="Digite seu logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        /> 
        <input id="bairro" type="text" placeholder="Digite seu bairro"/> 
        <input id="cidade" type="text" placeholder="Digite sua cidade"/> 
        <input id="uf" type="text" placeholder="Digite seu UF"/> 
        <input id="numero" type="text" placeholder="Digite o número da casa"/> 
       
        <button id="signupBtn" type="submit">Cadastrar</button>
        
      </form>   
         {/* <ul>
            {users.map((usuario , index) => (
              <li key={index}>{usuario.email}</li>
            ))}
         </ul>
         <Pagination 
          page={page} 
          onPageChange={(newPage) => setPage(newPage)}
        />  */}
    </div>         
  );
}

export default SignUp;