import React, {useState} from 'react';

const BlogInput=()=>{
    const [blog, setBlog]=useState([
        { id: 0, title: '', content: ''}
    ]);

    const [inputTitle, setInputTitle]=useState('');
    const [inputContent, setInputContent]=useState('');
    const [nextId, setNextId]=useState(1);

    const onChangeInputTitle=e=>setInputTitle(e.target.value);
    const onChangeInputContent=e=>setInputContent(e.target.value);

    const onClick=()=>{
        const finalBlog=blog.filter((b)=>b.id!==0);
        const nextBlog=finalBlog.concat({
            id: nextId,
            title: inputTitle,
            content: inputContent
        });
        setNextId(nextId+1);
        setBlog(nextBlog);
        setInputTitle('');
        setInputContent('');
    };
    
    const style={
            height: '50px'
    }

    const blogList=blog.map(b=>(
        <ul key={b.id}>
            글제목: {b.title} <br/> 내용: {b.content} 
            </ul>   
    ));

    return(
        <div>
            <center>
            <input 
            type="text" 
            name="inputTitle" 
            placeholder="글 제목"
            value={inputTitle} 
            onChange={onChangeInputTitle}/>
            <br/>
            <input 
            style={style} 
            type="text" 
            name="inputContent"
            placeholder="내용" 
            value={inputContent} 
            onChange={onChangeInputContent}/>
            <br/>
            <button>파일 선택</button>
            <p>선택된 파일 없음</p>
            <button onClick={onClick}>작성하기</button>
            <ul>{nextId===1 ? null : blogList}</ul>
            </center>
        </div>
    )
}

export default BlogInput;