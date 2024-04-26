'use client'

import { Stepper, Step, StepLabel, StepContent } from '@/components/stepper'

import { useState } from 'react'

const steps = ['Step One', 'Step Two', 'Step Three']

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)

  const goNext = async () => {
    if (activeStep + 1 === steps.length) return console.log('Finished.')
    setActiveStep(activeStep + 1)
  }

  const goPrev = () => {
    if (activeStep === 0) return console.log('Start.')
    setActiveStep(activeStep - 1)
  }

  return (
    <main className='w-full max-w-[700px]'>
      <div className='mb-12 space-x-4'>
        <button onClick={goPrev}>Go Prev</button>
        <button onClick={goNext}>Go Next</button>
      </div>

      <Stepper
        activeStep={activeStep}
        orientation='horizontal'
        stepIndexType='number'
        className='mb-12'
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper
        activeStep={activeStep}
        orientation='horizontal'
        stepIndexType='dot'
        className='mb-12'
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper
        activeStep={activeStep}
        orientation='vertical'
        stepIndexType='number'
        className='mb-12'
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step}</StepLabel>
            <StepContent>
              <div className='h-12'>{step}</div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Stepper
        activeStep={activeStep}
        orientation='vertical'
        stepIndexType='dot'
        className='mb-12'
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step}</StepLabel>
            <StepContent>
              <div className='h-12'>{step}</div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </main>
  )
}
