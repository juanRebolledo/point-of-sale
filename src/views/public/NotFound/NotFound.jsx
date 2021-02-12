import React from 'react'
import { Link } from 'react-router-dom'
import HomerError from 'shared/ErrorBoundary/component/HomerError'

const NotFound = () => (
  <HomerError text="Encontraste un lugar misterioso, sal de aquí rapido!">
    <Link className="btn button-red-outline mt-3" to="/">Volver al inicio</Link>
  </HomerError>
)

export default NotFound
