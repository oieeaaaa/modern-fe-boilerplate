import React, { ReactNode, ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'

type Props = {
  children: ReactNode
}

const AllTheProviders = ({ children }: Props) => <div>{children}</div>

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  rtlRender(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export default render
