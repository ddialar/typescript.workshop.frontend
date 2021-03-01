import { FC } from 'react'

import './FormWrapper.styles.css'

export const FormWrapper: FC = ({ children }) => (
  <div className="single-form-wrapper">
    {children}
  </div>
)
