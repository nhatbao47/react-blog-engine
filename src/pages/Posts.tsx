import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import { Column } from '../types/Column';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

function Posts() {
    const pageSize = 10;
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const columns: Column[] = [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'User ID',
            accessor: 'userId'
        },
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Body',
            accessor: 'body'
        }
    ];
    
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPost();
        
    }, []);

    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const onPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>
            <h1>Posts</h1>
            <Table columns={columns} data={currentPosts} loading={loading} />
            <Pagination total={posts.length} pageSize={pageSize} paginate={onPaginate} />
        </div>
    )
}

export default Posts