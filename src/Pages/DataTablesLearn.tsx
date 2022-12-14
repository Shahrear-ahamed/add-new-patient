import React, {Component} from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    {
        title: 'Name',
        width: 120,
        data: 'name'
    },
    {
        title: 'Nickname',
        width: 180,
        data: 'nickname'
    },
];

class DataTablesLearn extends Component<any, any> {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.names,
            columns,
            ordering: false
        });
    }
    componentWillUnmount(){
        $('.data-table-wrapper')
            .find('table')
            .DataTable()
            .destroy(true);
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}
export default DataTablesLearn;
