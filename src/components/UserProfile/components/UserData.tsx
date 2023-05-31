import userPhoto from '../../../img/userPhoto.png';

export default function UserData(){
    return(
        <div className='user_data'>
            <img src={userPhoto} alt="user photo" />
            <div className='data'>
                <div className='first'>
                    <p>John Snow</p>
                    <span>login</span>
                    <p>johnSnow@onet.pl</p>
                    <span>e-mail</span>
                </div>
                <div className='second'>
                    <p>Recommendations 67%</p>
                    <span>Recommends you</span>
                    <p>12.03.2021r</p>
                    <span>Date of registration</span>
                </div>
            </div>
        </div>
    )
}
