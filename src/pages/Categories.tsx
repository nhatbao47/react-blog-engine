import React, { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Column } from '../types/Column';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import { Category } from '../types/Cateogory';
import { useAuth } from 'oidc-react';

function Categories() {
    const auth = useAuth();
    const instance = axios.create({
        baseURL: 'https://localhost:44355/api/',
        headers: {'Authorization': `Bearer ${auth.userData?.access_token}`}
      });
    const pageSize = 10;
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const columns: Column[] = [
        {
            Header: 'ID',
            accessor: 'Id'
        },
        {
            Header: 'Name',
            accessor: 'Name'
        },
        {
            Header: 'Description',
            accessor: 'Description'
        }
    ];
    
    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);
            const res = await instance.get<Category[]>('Categories');
            setCategories(res.data);
            setLoading(false);
        }

        fetchCategory();
        
    }, []);

    const onPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>
            <h1>Categories</h1>
            <Table columns={columns} data={categories} loading={loading} />
            <Pagination total={categories.length} pageSize={pageSize} paginate={onPaginate} />
        </div>
    )
}

export default Categories