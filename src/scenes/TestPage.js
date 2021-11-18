import React from 'react'
import { ButtonMaterial } from '../components/atoms/Buttons/ButtonMaterial'

export default function TestPage() {
  // const [copySuccess, setCopySuccess] = useState('')
  // const textAreaRef = useRef(null)

  const handleClick = () => {
    window.clipboardData.setData('Text', 'Copy this text to clipboard')
  }

  const copyToClipboard = () => {
    const textField = document.createElement('textarea')
    textField.innerText = 'hypewords.ru'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  // function copyToClipboard(e) {
  //   textAreaRef.current.select()
  //   document.execCommand('copy')
  //   // This is just personal preference.
  //   // I prefer to not show the whole text area selected.
  //   e.target.focus()
  //   setCopySuccess('Copied!')
  // }

  return (
    <div>
      <ButtonMaterial handleClick={copyToClipboard} text={'copy'} />
    </div>
    // <div>
    //   {
    //     /* Logical shortcut for only displaying the
    //                button if the copy command exists */
    //     document.queryCommandSupported('copy') && (
    //       <div>
    //         <button onClick={copyToClipboard}>Copy</button>
    //         {copySuccess}
    //       </div>
    //     )
    //   }
    //   <form>
    //     <textarea ref={textAreaRef} value="Some text to copy" />
    //   </form>
    // </div>
  )
}
