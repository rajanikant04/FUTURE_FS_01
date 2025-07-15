import React from 'react'

function LoadingScreen() {
  return (
    <div className='fixed inset-0 bg-background z-50 flex items-center justify-center'>
      <div className='text-center space-y-6'>
        <div className='w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto'></div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold text-glow'>Rajanikant's Portfolio</h2>
          <p className='text-muted-foreground'>Preparing something awesome...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
