import { Column } from "../components/Column";
import Table from "../components/Table";

function Home() {
    const columns: Column[] = [
        {
            Header: 'Name',
            accessor: 'fullname'
        },
        {
            Header: 'Email Address',
            accessor: 'email'
        }
    ];
    const data: any[] = [
        {
            fullname: 'David Nguyen',
            email: 'nhatbao@gmail.com'
        },
        {
            fullname: 'Peter Nguyen',
            email: 'peter@gmail.com'
        }
    ];
    return (
        <>
            <h1>Home</h1>
            <Table columns={columns} data={data} />    
        </>
    );
}

export default Home;