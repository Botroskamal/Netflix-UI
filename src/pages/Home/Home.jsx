import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import List from '../../components/List/List';
import './Home.scss';

const items = [
  {
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/glass-onion-daniel-craig-pale-blue-eye-christian-bale-the-good-nurse-jessica-chastain-do-revenge-camil-mendes-viola-davis-from-ma-rainey-s.jpg"
  },
  {
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/The-Best-Feel-Good-Movies-on-Netflix-Right-Now.jpg"
  },
  {
    image: "https://occ-0-360-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZftcq9Kd_vvRqmE6lOhpLGlfz6tcsqlUopJ37pinmVRQUhUzDtEqX22820jSMSpA6ibL2BJI4nxV9CYcD5ALFkTm4MsOV016Ew.jpg?r=a6e"
  },
  {
    image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdrT5pbFN1GJk0aqPkKNfVAtCiIqQ6LklMxG7L2r1AkbOxGUyHYUSt4VwJfS140e2lTK9Xk0y5VjkIabg4hFDKQs7V4CYd2sSrelzMSVP21Iz_nNsFwYivJ-6hX--ndiok9FnkXuHfbI7ET1_pcbpVvkv8Y.jpg?r=6cb"
  },
  {
    image: "https://occ-0-2433-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzOeOqPEk1M_DWfMF64utFLlsrEMLTsiViL_B4cVd1PuKFzMNbkkathcJBDLghK2pIeAanGHGL_X5pgpNZDnCQPlbK9mVM8UFdjutj-fHXxQASUlsEWhvy25GXqlXGZVz_3.jpg?r=fb8"
  },
  {
    image: "https://occ-0-1348-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdVozig2u8iR0NKqtv2lR888eLN6X8Exwx0wUT1zMMYAuRqc5x3oBq63k5SfbNvwnDRKBUhx-e21qjVNRlCu7lmAZpKIr15QARY.jpg?r=d58"
  }
];

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List items={items}/>
    </div>
  )
}

export default Home
