export interface TableInterface {
    header: any;
    body: Array<any>;
}

export interface CustomTableInterface {
    header: any;
    body: Array<any>;
    options: {
        withPagination: boolean
    }
}