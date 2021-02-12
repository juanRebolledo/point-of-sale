import React, { Component } from 'react'
import HomerError from './component/HomerError'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <HomerError text="Al parecer hubo un error..." />
      )
    }
    return children
  }
}
export default ErrorBoundary
