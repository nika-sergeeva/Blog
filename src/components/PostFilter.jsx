import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput 
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
        />
        <MySelect 
        defaultValue="Search By..."
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          {value: 'title', name: 'Heading'},
          {value: 'body', name: 'Text'}
        ]}/>

    </div>
  )
}

export default PostFilter