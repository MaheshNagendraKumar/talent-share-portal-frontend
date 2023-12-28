import Button from '../../components/button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../store/userActions/userActions';
import { RootState } from '../../store/userActions/reducers';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const logout = () => {
        dispatch(clearUser());
        navigate("/")
    }
    return (
        <>
            {
                user &&
                <div>Welcome {user.userEmail}</div>
            }
            <div onClick={logout}>
                <Button type='button' >Logout</Button>
            </div>
        </>
    )
}

export default Dashboard