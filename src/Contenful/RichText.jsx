import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';



function RichText({content}) {

  
    
    
    const options = {

      renderNode:{
        [BLOCKS.HEADING_1]:(node,children)=>(
        <h1 className='text-4xl bg-black text-white font-bold my-10 p-2 '>{children}</h1>
        ),
        [BLOCKS.HEADING_2]:(node,children)=>(
        <h2 className='text-2xl bg-blue-500 text-white p-2'>{children}</h2>
        ),
         [BLOCKS.PARAGRAPH]:(node,children)=>(
        <p className='text-xl text-justify font-mono mx-auto my-10 '>{children}</p>
        ),
        [BLOCKS.EMBEDDED_ASSET]:(node,children)=>(
          
          <div className=''>
           <img src={node.data.target.fields.file.url} alt="" className='w-full h-full mx-auto'/>
          </div>
         
        ),
        [INLINES.HYPERLINK]: (node, children) => (
          <a 
            href={node.data.uri} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-blue-500 underline hover:text-blue-700'>
            {children}
          </a>
        ),

        [BLOCKS.UNORDERED_LIST]: (node, children) => (
          <ul className='list-disc pl-5 my-5'>
            {children}
          </ul>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
          <li className='text-lg my-2'>
            {children}
          </li>
        ),
        

      }

     
      
      
      
        
         }

    return (

        <>
            {
                documentToReactComponents(content, options)
            }
        </>


    )
}

export default RichText
