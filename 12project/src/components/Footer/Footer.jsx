import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Your Company</h2>
              <p className="text-gray-400 text-sm">© 2025 All rights reserved.</p>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">Services</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6a8.92 8.92 0 0 1-2.54.7 4.4 4.4 0 0 0 1.94-2.42 8.87 8.87 0 0 1-2.83 1.08A4.37 4.37 0 0 0 16 4a4.38 4.38 0 0 0-4.35 5.38A12.4 12.4 0 0 1 3.16 5.2a4.36 4.36 0 0 0 1.36 5.85 4.28 4.28 0 0 1-2-.55v.05a4.38 4.38 0 0 0 3.5 4.3 4.41 4.41 0 0 1-2 .07 4.38 4.38 0 0 0 4.1 3A8.81 8.81 0 0 1 2 18.13a12.35 12.35 0 0 0 6.75 2c8.1 0 12.52-6.8 12.52-12.68 0-.2 0-.39-.01-.58A8.9 8.9 0 0 0 22.46 6z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.61 8.06 8.08 8.06 3.62 0 6.63-2.32 7.72-5.54H12v-2.66h8.78c.12-.64.18-1.31.18-2 0-5.52-4.48-10-10-10zm0 18.2c-4.51 0-8.17-3.66-8.17-8.17 0-4.51 3.66-8.17 8.17-8.17 4.51 0 8.17 3.66 8.17 8.17 0 4.51-3.66 8.17-8.17 8.17z"></path></svg>
              </a>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer