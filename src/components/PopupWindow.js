import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import '../popupStyle.css' // Import the CSS file

export default function PopupWindow() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleModalClose = () => {
      // Access the input value here (inputValue)
      console.log('Input Value:', inputValue);
  
      // Close the modal or perform any other actions
      // ...
    };


  return (
    <div>
      <Popup trigger=
                {<button> Click to open modal </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

        <Popup trigger={<button>Click to open modal</button>} modal nested>
          {close => (
            <div className='modal'>
              <div className='content'>
                <p>Welcome to GFG!!!</p>
                {/* Input Field */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter something..."
                />
              </div>
              <div>
                <button onClick={handleModalClose}>Close modal</button>
              </div>
            </div>
          )}
      </Popup>
    </div>
  )
}
