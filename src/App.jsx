import AppRoutes from './routes/AppRoutes'
import {useEffect} from 'react'
import useAuthStore from './store/authStore.js'
import {updateAbility} from './casl/ability.js'


function App() {
  const {user}= useAuthStore();
  useEffect( ()=>{
    if(user){
      updateAbility(user);
    }
  }, [user])

  return <AppRoutes />
}

export default App