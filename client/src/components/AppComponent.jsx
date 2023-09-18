import {useNavigate} from 'react-router-dom'

const AppComponent = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
          navigate('/')
        } else {
          navigate('/login')
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