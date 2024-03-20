import React from 'react'
import './account.css'

const Account = () => {
  return (
    <>
    <section className='accountInfo'>
    <div className='singupContianer '>
        <h1 className='heading'>Update Account </h1>
        <div className="content ">
            <div className="left">
                <div className="img flexCenter">
                    <input type="file"  src="" alt='img'/>
                    <img src="https://img.freepik.com/free-photo/gorgeous-young-lady-photographer_171337-3510.jpg" alt="images" />
                </div>
                </div>
                <div className="right">
                    <label htmlFor="">Username</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className='button'>Update</button>
                </div>
            </div>
        </div>
        
      </section>
     
    </>
  )
}

export default Account
