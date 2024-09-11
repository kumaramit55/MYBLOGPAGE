import React from 'react'
import client from '../Contenful/config.js'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


export default function HomePage() {
  const  perpage=4
  const [BLOGS, setBlog] = useState([])
  const [pageno, setpageNo] = useState(1)
 
  function updatepageno(pageno) {
    if (pageno > 0) {
      setpageNo(pageno)
      }


  }

  useEffect(() => {
   
    const getData = async (pageno) => {
      
      try {
         
        const entries = await client.getEntries({content_type: 'myBlogApp',limit:perpage})
        setBlog(entries.items)


      } catch (error) {
        console.log(error)

      }

    }

    getData()

  },[pageno])







  // console.log(BLOGS)

  return (
    <div className='w-full h-auto '>
      <div className='text-4xl bg-gray-500 text-white'>My BLOG PAGE WITH CONTETNFUL</div>
      {
        BLOGS.map((blog) => {
          return (
            <div key={blog.fields.blogtitle} className=' mt-10 flex gap-4 w-4/5 mx-auto p-3'>

              <img src={blog.fields.blogimage.fields.file.url} alt="" srcSet="" width={150} height={300} />


              <div className='text-left'>
                <h1 className='text-left text-2xl font-bold '>{blog.fields.blogtitle}</h1>
                <p className='text-justify text-xl font-sans'>{blog.fields.minidescription}</p>
                <NavLink to={`${blog.fields.blogslug}`}>
                  <button className='bg-blue-500 p-3 rounded-md text-white font-bold mt-4 '>
                    Read More...
                  </button>

                </NavLink>
              </div>





            </div>
          )
        })
      }

      <div className='flex gap-5 justify-center mt-10'>
        <button className='text-2xl bg-black text-white p-2 rounded-md font-bold' disabled={pageno==1} onClick={() => updatepageno(pageno - 1)} >Previous</button>
        <div className='text-2xl bg-black text-white px-3 py-2 rounded-md font-bold'>{pageno}</div>
        <button className='text-2xl bg-black text-white p-2 rounded-md font-bold' onClick={() => updatepageno(pageno + 1)}>Next</button>
      </div>

    </div>
  )
}

