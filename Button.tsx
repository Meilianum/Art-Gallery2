"use client"
import React from 'react'

export default function Button() {
  return (
    <div>
      <button 

      className="bg-blue-500 text-black font-thinking rounded-full py-1 px-1 w-32 h-8 m-4 hover:mr-2 hover:bg-amber-500  text-xl" 
              onClick={() => console.log("Button clicked!")}>
             
    
        Play Aritle
      </button>
      </div>
  )
}
