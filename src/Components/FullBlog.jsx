import React, { useEffect, useState } from 'react'
import client from '../Contenful/config'
import { useParams } from 'react-router-dom'
import RichText from '../Contenful/RichText'

function FullBlog() {
    const {blogslug}=useParams()
    const [blog,setBlog]=useState([])
    const [Loading,SetLoading]=useState(true)
    useEffect(()=>{
      const fetchdata =async()=>{
        try {
          let entries= await client.getEntries({content_type:'myBlogApp'})
        let a=entries.items
        console.log(a)
        a.map((item)=>{
          if(item.fields.blogslug==blogslug){
            setBlog(item.fields)
            SetLoading(false)
            
            
          }
        })
          
        } catch (error) {
          console.log(error)
          
        }
        
      }
      fetchdata()
      
    },[blogslug,Loading])
  
    
if (Loading) return <p className='text-2xl font-bold'>Loading Data</p>
  return (
    <div className='w-11/12 mx-auto'>
      
      <h1 className='text-3xl font-bold'>{blog.blogtitle}</h1>
      <h4 className='text-xl font-serif '>{blog.blogdate}</h4>
      <div className='w-11/12 mx-auto my-8 '>
      <img src={blog.blogimage.fields.file.url} alt="" className='w-11/12 mx-auto' srcSet="" />
      </div>
      
      <div className='flex flex-col gap-5 w-11/12 mx-auto  px-10'>
      <RichText content={blog.fullblog}/>
      </div>


      
      
    </div>
  )
}

export default FullBlog
