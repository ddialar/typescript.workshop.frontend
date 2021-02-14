import React, { FC } from 'react'

import './singleForm.styles.css'

export const SingleForm: FC = ({ children }) => (
  <div className="single-form-container">
    {children}
  </div>
)
