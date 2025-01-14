import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography,Box } from "@mui/material"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router";
import axios from "axios";

const Blog = ({title,description,image,userName,isUser,id}) => {
  const navigate=useNavigate()
  console.log(title,isUser)


  const handleEdit=()=>{
    navigate(`/myblogs/${id}`)

  }

  const deleteRequest=async()=>{
    const response= await axios.delete(`http://localhost:5000/api/blog/${id}`)
    .catch(err=>console.log(err))

    const data =await response.data 
    return data
  }


  const handleDelete=()=>{
    deleteRequest().then(()=>navigate("/"))
    .then(()=>navigate("/blogs"))

  }


  return (
    <div>
        <Card sx={{ width:'40%',margin:'auto', 
            mt:2,padding:2,boxShadow:"10px 10px 20px #ccc",":hover:":{
                boxShadow:"10px 10px 20px #ccc"
            },
            }}>

              {
                isUser && <Box display={'flex'}>

                  <IconButton 
                  onClick={handleEdit}
                  sx={{marginLeft:'auto'}}>
                    <ModeEditOutlineIcon color="warning"/>
                    </IconButton>

                  <IconButton onClick={handleDelete}>
                    <DeleteIcon color="error"/>
                    </IconButton>

                </Box>
                 
              }


      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
    
      <CardContent>
      <hr />
      <br />
        <Typography variant="body2" color="text.secondary">
        <b>{userName}</b>: {description}
        </Typography>
      </CardContent>
      
     
    </Card>



    </div>
  )
}

export default Blog