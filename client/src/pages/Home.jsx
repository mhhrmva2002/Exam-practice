import React from 'react'
import '../index.css';
import { Card } from 'antd';
const { Meta } = Card;
const Home = () => {
  return (
    <>
        <section className='one'>
            <div className='one-div'>
                <p>OPENNING ON 21ST FEBRUARY, 2018</p>
                <h1 style={{fontSize:"50px"}}>Exhibition on Modern Era</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</p>
           <button className='get-started'>GET STARTED</button>
            </div>
        </section>
        <section>
            <div className='Our-Offered'>
                <h1>Our Offered Services</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='cards'>
            <Card className="card"
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/security/img/s1.jpg" />}
  >
    <Meta title="Basic & Common Repairs" description="
Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
" />
  </Card>
  <Card className="card"
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/security/img/s2.jpg" />}
  >
    <Meta title="Brake Repairs & Services" description="
Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
" />
  </Card>
  <Card className="card"
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/security/img/s3.jpg" />}
  >
    <Meta title="Preventive Maintenance" description="
Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
" />
  </Card>
            </div>
        </section>
    </>
  )
}

export default Home