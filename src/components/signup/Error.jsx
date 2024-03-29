import React from "react"

const Error = ({ message }) => {
  return (
    <div>
      <div className="border border-red-300 bg-red-100 text-red-700 p-3 w-full rounded-lg">
        {message}
      </div>
    </div>
  )
}

export default Error
