import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'

const AppComponent = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) {
          navigate('/main')
        } else {
          navigate('/')
        }
      }, [])

      return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default AppComponent