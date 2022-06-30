import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({getPost}) => {

    const [article, setArticle] = useState({title: '', body: ''})

const addNewPost = (e) => {
e.preventDefault()
const newArticle = {
...article, id: Date.now()
}
getPost(newArticle)
setArticle({title: '', body: ''})
 }


  return (
    <form>
          <MyInput 
          type="text" 
          value={article.title} 
          onChange={e => setArticle({...article, title: e.target.value})} 
          placeholder="Title" 
          />
          <MyInput 
          type="text" 
          placeholder="Description"
          value={article.body}
          onChange={e => setArticle({...article, body: e.target.value})}
           />
          <MyButton onClick={(e) => addNewPost(e)}>Add Post</MyButton>
    </form>
  )
}

export default PostForm