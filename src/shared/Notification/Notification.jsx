import React, { useEffect } from 'react'

const Notification = ({ delay, hideNotify, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotify(false)
    }, delay)

    return () => clearTimeout(timer)

    // eslint-disable-next-line
  }, [delay])

  return <p className="text-danger mb-0">{text}</p>
}

export default Notification
