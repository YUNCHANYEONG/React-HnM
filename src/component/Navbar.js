import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateLogout } from '../redux/actions/authentiacteAction';



const Navbar = ({authenticate}) => {
    const menuList = [
        '여성', 
        'Divided', 
        '남성', 
        '신생아/유아', 
        '아동', 
        'Sale', 
        '지속가능성'
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToHomeAndLogout = () => {
        if(authenticate == true){
            dispatch(authenticateLogout.logout());
            alert('로그아웃하였습니다')
        }
        navigate('/');
    };

    const goToHome = () => {
        navigate('/');
    };

    const search = (event) => {
        if(event.key == "Enter"){
            // 입력한 검색어를 읽어와서 url을 바꿔준다.
            let keyword = event.target.value;
            console.log(keyword);

            navigate(`/?q=${keyword}`)
        }
    };


    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    {authenticate == false ?   
                        <div onClick={goToLogin}>로그인</div> :
                        <div onClick={goToHomeAndLogout}>로그아웃</div>
                    }
                </div>
            </div>
            <div className='nav-section'>
                <img src="https://www2.hm.com/hm-logo.png" width={100} onClick={goToHome}/>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
                </ul>
            </div>
            <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} className='search-img'/>
                    <input type="text" 
                    className='search-text' 
                    placeholder='제품검색'
                    onKeyPress={(event) => search(event)}
                    />
            </div>
        </div>
    )
}

export default Navbar