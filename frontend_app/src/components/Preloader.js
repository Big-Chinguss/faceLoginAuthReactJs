import React, { useEffect } from 'react'
import '../css/Preloader.css'
import { preLoaderAnim } from '../animations/index.js'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[]);

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>
                Welcome ;)
            </span>
        </div>
    </div>
  )
}

export default PreLoader