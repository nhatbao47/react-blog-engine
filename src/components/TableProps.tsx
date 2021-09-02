import { Column } from "../types/Column";

export interface TableProps {
    columns: Column[],
    data: any[],
    loading: boolean,
    showAction?: boolean
}