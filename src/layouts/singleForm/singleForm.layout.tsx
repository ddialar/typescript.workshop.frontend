import { FC } from 'react'

import './SingleForm.styles.css'

export const SingleForm: FC = ({ children }) => (
  <div className="single-form-container">
    {children}
  </div>
)
