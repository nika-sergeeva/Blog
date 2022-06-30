import Header from "./components/Header/Header";
import "./App.css"
import Main from "./components/Main";
import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
const [post, setPost] = useState([])
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(post, filter.sort, filter.query)

const getPost = (newPost) =>{
setPost([...post, newPost])
setModal(false)
}
const deletePost = (item) =>{
  setPost(post.filter(i => i.id !== item.id))
}


useEffect(()=> {
  async function fetchPost(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPost(res.data)
  }

  fetchPost()
}, [])


  return (
    <div className="App">
      <Header />
      <Main>
        
        <MyButton style={{width: '18%'}} onClick={() => setModal(true)}>Create new post</MyButton>

        <MyModal visible={modal} setVisible={setModal}>
          <PostForm getPost={getPost}/>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList post={sortedAndSearchedPosts} remove={deletePost} />
      </Main>
    </div>
  );
}

export default App;
