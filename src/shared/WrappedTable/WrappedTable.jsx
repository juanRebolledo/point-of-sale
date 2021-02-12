import React, { useState, useMemo } from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Table from 'shared/Table/Table'
import SearchInput from 'shared/SearchInput/SearchInput'
import FormModal from 'shared/formik/FormModal/FormModal'
import NoItemsCreated from 'shared/NoItemsCreated/NoItemsCreated'
import { Button } from 'shared'
import './WrappedTable.css'
import Spinner from 'shared/Spinner/Spinner'

const WrappedTable = ({ children, colorSubmitModal, data, headers, formik, loading, placeholder, searchBy,
  submitTextModal, textAddButton }) => {
  const [tableModal, setTableModal] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const existSearchBy = !!headers.find(({ key }) => key === searchBy) || false
  const addButtonText = `Añadir ${textAddButton}`

  const showModal = () => setTableModal(!tableModal)

  const onHandleChange = ({ target }) => setSearchInputValue(target.value)

  const filterData = (rows) => {
    return rows.filter((row) => {
      const keyValue = row[searchBy].toLowerCase()
      const searchInputToLowerCase = searchInputValue.toLowerCase()
      const searchValueExistInDataTable = keyValue.indexOf(searchInputToLowerCase) > -1
      if (searchValueExistInDataTable) return row
      return null
    })
  }

  const dataTable = useMemo(() => {
    if (!data) return []
    if (searchInputValue) {
      const dataFiltered = filterData(data)
      return dataFiltered
    }
    return data
    // eslint-disable-next-line
  }, [data, searchInputValue])

  return (
    <div>
      <Row className="align-items-center header-app justify-content-between mb-3">
        <Col lg={9} className="mb-2">
          {searchBy && existSearchBy && (
            <SearchInput dataSearch={searchInputValue} onHandleChange={onHandleChange} placeholder={placeholder} />
          )}
        </Col>

        {children && (
          <Col lg={3}>
            <Button color="green" className="w-100" onClick={showModal} type="button">
              {addButtonText}
              <FontAwesomeIcon className="ml-2" icon={faPlus} />
            </Button>

            <FormModal
              {...formik}
              colorButton={colorSubmitModal}
              modal={tableModal}
              submitText={submitTextModal}
              title="Añadir"
              toggle={showModal}
            >
              {(props) => children(props)}
            </FormModal>
          </Col>
        )}
      </Row>

      {// eslint-disable-next-line no-nested-ternary
        loading ? <Spinner />
          : dataTable.length > 0 ? <Table data={dataTable} headers={headers} />
            : <NoItemsCreated text="Aún no hay elementos disponibles, ¡Porfavor agregue un nuevo elemento!" />
      }
    </div>
  )
}

export default WrappedTable
