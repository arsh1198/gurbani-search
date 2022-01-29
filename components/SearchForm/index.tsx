import React, { useState } from 'react'
import Button from '../core/Button'
import Input from '../core/Input'
import styles from './index.module.css'
import { statusCodes, useApi } from '../../contexts/ApiContext'

const SearchForm = () => {
  const { searchShabad, status } = useApi()
  const [query, setQuery] = useState('')

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    searchShabad(query)
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <Input
        loading={status === statusCodes.PENDING}
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button disabled={query === ''} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default SearchForm
