import { useState } from 'react'

function SignUpModal({ isOpen, onClose, onSuccess }) {
  const [mode, setMode] = useState('signup')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = () => {
    if (mode === 'signup') {
      if (!name || !email || !password) {
        setError('Please fill in all fields')
        return
      }
    }

    if (mode === 'login') {
      if (!email || !password) {
        setError('Please fill in all fields')
        return
      }
    }
    setError('')
    onSuccess()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose} >
      <div className="relative bg-white w-[454px] rounded-xl flex flex-col items-center pt-8 pb-8" onClick={(e) => e.stopPropagation()} >
        <span onClick={onClose} className="absolute top-4 right-4 cursor-pointer text-[20px]" > ✕ </span>

        <h2 className="text-[30px] mb-1">DreamHouse</h2>
        <h3 className="text-[24px] mb-6"> {mode === 'signup' ? 'Sign up' : 'Login'} </h3>
        {mode === 'signup' && (
          <>
            <input className="w-[373px] h-[46px] mb-3 border border-[#2C2C2C]/30 rounded-md px-3" type="text" placeholder="Your name.." value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-[373px] h-[46px] mb-3 border border-[#2C2C2C]/30 rounded-md px-3" type="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="w-[373px] h-[46px] mb-5 border border-[#2C2C2C]/30 rounded-md px-3" type="password" placeholder="Password.." value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="w-[373px] h-[46px] bg-[#FDB354] rounded-[5px] text-[16px] mb-2" onClick={handleSubmit} > Create </button>

            {error && (
              <p className="text-red-500 text-[14px] mb-2">
                {error}
              </p>
            )}

            <p className="text-[16px] mt-5 cursor-pointer" onClick={() => {
                setMode('login')
                setError('')
              }}
            > Already have a profile </p>
          </>
        )}

        {mode === 'login' && (
          <>
            <input className="w-[373px] h-[46px] mb-3 border border-[#2C2C2C]/30 rounded-md px-3" type="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-[373px] h-[46px] mb-5 border border-[#2C2C2C]/30 rounded-md px-3" type="password" placeholder="Password.." value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="w-[373px] h-[46px] bg-[#FDB354] rounded-[5px] text-[16px] mb-2" onClick={handleSubmit} > Login in </button>

            {error && (
              <p className="text-red-500 text-[14px] mb-2">
                {error}
              </p>
            )}

            <p className="text-[16px] mt-5 cursor-pointer" onClick={() => {
                setMode('signup')
                setError('')
              }}
            >
              You don't have an account </p>
          </>
        )}
      </div>
    </div>
  )
}

export default SignUpModal;