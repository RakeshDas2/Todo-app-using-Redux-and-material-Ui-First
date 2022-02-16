import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editData, showDialoge } from '../redux/actions/action'

function EditData() {
    const showData = useSelector(state => state.dialogeReducer)
    const todoState=useSelector(state=>state.todoReducer)
    const storeIndex=useSelector(state=>state.indexReducer)
    const storeObject = useSelector(state=>state.objectReducer)
    const [upData,setUpData]=useState({
        task:'',
        completed:false
    })
const recivedData=storeObject

const index=storeIndex.index

  useEffect(()=>{
      setUpData(recivedData)
  },[storeIndex])

    const dispatch = useDispatch()
   
    const modifyData = () => {
       dispatch(editData({upData,index}))
    }
    const closeDialoge = () => {
        dispatch(showDialoge(false))
    }
    const handelChange = (e) => {
     const upDataCopy={...upData}
     upDataCopy[e.target.name]=e.target.value
     setUpData(upDataCopy)
    }

    return (
        <div>
            <Dialog open={showData.dialogeShow} onClose={closeDialoge}>
                <DialogTitle>
                    <Typography color='primary'>
                        Edit Your Task
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <TextField onChange={(e) => { handelChange(e) }} name='task' value={upData.task}/>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={() => { modifyData() }}>Done</Button>
                    <Button variant='outlined' onClick={() => { closeDialoge() }} >Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditData