import './styles/ProfilArticles.css'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const ProfilArticles = (props) => {
  const [pageSizeAdmin, setPageSizeAdmin] = useState(10)
  const [pageSizeUser, setPageSizeUser] = useState(5)

  console.log(props.bdd)

  return (
    <div>
      <div className={props.admin ? 'reveal profilTableau' : 'cache'}>
        <DataGrid
          style={{ height: 650 }}
          columns={[
            {
              field: 'name',
              headerName: 'Membre',
              headerClassName: 'headerTableau',
              minWidth: 110,
              flex: 0.5,
              align: 'left',
              headerAlign: 'left',
            },
            {
              field: 'week',
              headerName: 'Semaine',
              headerClassName: 'headerTableau',
              type: 'number',
              minWidth: 60,
              flex: 0.25,
              align: 'center',
              headerAlign: 'center',
            },
            {
              field: 'year',
              headerName: 'Année',
              headerClassName: 'headerTableau',
              type: 'number',
              minWidth: 75,
              flex: 0.25,
              align: 'center',
              headerAlign: 'center',
            },
            {
              field: 'url',
              headerName: 'URL',
              headerClassName: 'headerTableau',
              minWidth: 120,
              flex: 2,
              align: 'left',
              headerAlign: 'left',
            },
            {
              field: 'description',
              headerName: 'Description',
              headerClassName: 'headerTableau',
              minWidth: 280,
              flex: 2.5,
              align: 'left',
              headerAlign: 'left',
            },
            {
              field: 'id',
              headerName: 'Supprimer',
              headerClassName: 'headerTableau',
              minWidth: 105,
              flex: 0.5,
              align: 'center',
              headerAlign: 'center',
              renderCell: (field) => (
                <i
                  onClick={() => props.deleteArticle(field.id)}
                  /*onClick={() => console.log(field.id)}*/
                  class='fas fa-times-circle'
                ></i>
              ),
            },
          ]}
          sx={{
            fontFamily: 'var(--fontBody)',
            color: 'var(--thirdColor)',
            borderColor: 'var(--firstColor)',
            backdropFilter: 'blur(20px)',
            boxShadow: '5px 5px 5px var(--shadowColor)',
            padding: '8px',
            '& .MuiDataGrid-cell:hover': {},
          }}
          rows={props.bdd}
          pageSize={pageSizeAdmin}
          onPageSizeChange={(newPageSize) => setPageSizeAdmin(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />{' '}
      </div>
      <div className={!props.admin ? 'reveal profilTableau' : 'cache'}>
        <DataGrid
          style={{ height: 450 }}
          columns={[
            {
              field: 'week',
              headerName: 'Semaine',
              headerClassName: 'headerTableau',
              type: 'number',
              minWidth: 60,
              flex: 0.25,
              align: 'center',
              headerAlign: 'center',
            },
            {
              field: 'year',
              headerName: 'Année',
              headerClassName: 'headerTableau',
              type: 'number',
              minWidth: 75,
              flex: 0.25,
              align: 'center',
              headerAlign: 'center',
            },
            {
              field: 'url',
              headerName: 'URL',
              headerClassName: 'headerTableau',
              minWidth: 120,
              flex: 2,
              align: 'left',
              headerAlign: 'left',
            },
            {
              field: 'description',
              headerName: 'Description',
              headerClassName: 'headerTableau',
              minWidth: 280,
              flex: 2.5,
              align: 'left',
              headerAlign: 'left',
            },
            {
              field: 'supprimer',
              headerName: 'Supprimer',
              headerClassName: 'headerTableau',
              minWidth: 105,
              flex: 0.5,
              align: 'center',
              headerAlign: 'center',
              renderCell: (field) => (
                <i
                  onClick={() => props.deleteArticle(field.id)}
                  class='fas fa-times-circle'
                ></i>
              ),
            },
          ]}
          sx={{
            fontFamily: 'var(--fontBody)',
            color: 'var(--thirdColor)',
            borderColor: 'var(--firstColor)',
            backdropFilter: 'blur(20px)',
            boxShadow: '5px 5px 5px var(--shadowColor)',
            padding: '8px',
            '& .MuiDataGrid-cell:hover': {},
          }}
          rows={props.stokage}
          pageSize={pageSizeUser}
          onPageSizeChange={(newPageSize) => setPageSizeUser(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
      </div>{' '}
    </div>
  )
}

export default ProfilArticles
