import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showDialoge } from '../redux/actions/action'

function EditData() {
    const showData = useSelector(state => state.dialogeReducer)
    const todoState=useSelector(state=>state.todoReducer)
    
    const [upData,setUpData]=useState({
        task:todoState.finalData.task,
        completed:false
    })

   

    const dispatch = useDispatch()
    console.log(showData);
    const modifyData = () => {

    }
    const closeDialoge = () => {
        dispatch(showDialoge(false))
    }
    const handelChange = (e) => {
     const upDataCopy={...upData}
     upDataCopy[e.target.name]=e.target.value
     setUpData(upDataCopy)
        console.log(upData);
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