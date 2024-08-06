import React from 'react'

const SoundSection = () => {

  const onLearnMoreHandler = () => {
    const goToElemetn = document.querySelector('.display-section')

    window.scrollTo({
      top: goToElemetn?.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='sound-section wrapper'>
        <div className="body">
            <div className="sound-section-content content">
                <h2 className='title'>New Sound System</h2>
                <p className="text">Fell the Base.</p>
                <span className="description">From $41.62/mo for 24mo. or $999 before trade-in</span>
                <ul className="links">
                  <li><button className='button'>Buy</button></li>
                  <li><a className="link" onClick={onLearnMoreHandler}>Learn more</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SoundSection