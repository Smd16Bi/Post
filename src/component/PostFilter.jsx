import React from 'react'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';



const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter(
                    { ...filter, query: e.target.value }
                )}
                placeholder="Serch"
            />
            <MySelect
                value={filter.sort}
                onChange={e => setFilter({ ...filter, sort: e })}
                defaultValue={"Sort by"}
                options={[
                    { value: "title", name: "Title" },
                    { value: "body", name: "Body" }
                ]}
            />
        </div>
    )
}

export default PostFilter