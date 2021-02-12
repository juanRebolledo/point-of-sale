import React from 'react'
import { Input } from 'reactstrap'
import './SearchInput.scss'

const SearchInput = ({ dataSearch, onHandleChange, placeholder = 'Buscar' }) => {
  return (
    <Input className="search-input w-100" placeholder={placeholder} onChange={onHandleChange} value={dataSearch} />
  )
}

export default SearchInput
