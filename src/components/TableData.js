import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector,useDispatch} from 'react-redux'
import { completedTask, deleteData, showDialoge, updateIndex, updateObject } from '../redux/actions/action';


function TableData() {

    const reciveObject=useSelector(state=>state.objectReducer)
   const todoStore=useSelector(state=>state.todoReducer)

   const dispatch=useDispatch()

   console.log(todoStore);

   const editDa=(index,ele)=>{
          dispatch(showDialoge(true))
        dispatch(updateIndex(index))
        dispatch(updateObject(ele))
   }

   const deleteDa=(index)=>{
       dispatch(deleteData(index))
       console.log(index);
   }

   const updateComplete=(index)=>{
       dispatch(completedTask(index))
   }

  return (
    <div>
        <Paper style={{width:'900px', marginLeft:'100px'}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {todoStore.finalData.map((ele,index)=>{
                            return <TableRow key={index}>
                                <TableCell><Typography variant='h5' style={ele.completed ? {color:'blue'}:null} >{ele.task}</Typography></TableCell>
                                <TableCell style={{display:'flex'}}>
                                    <Box pl={2}><EditIcon onClick={()=>{editDa(index,ele)}}/></Box>
                                <Box pl={2}><DoneIcon onClick={()=>{updateComplete(index)}}/></Box>
                                <Box pl={2}><DeleteIcon onClick={()=>{deleteDa(index)}}/></Box></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>   
            </Paper>
    </div>
  )
}

export default TableData