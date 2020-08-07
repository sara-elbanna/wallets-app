import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import _map from 'lodash/map'

import { getCurrenciesList } from '../store/actions/currenciesActions';

const { Column, ColumnGroup } = Table;

 class Currencies extends React.Component{
    state={
    }

    componentDidMount(){
        this.props.getCurrenciesList()
    }

    render(){
        let dataSource = []
        _map( this.props.currenciesList ,(val,key)=>{
            dataSource.push({key:key ,currency:key, xdt: val.xdt, fty:val.fty, cdt:val.cdt})
        })
          
        return <div className='currencies'>
            <div className='container'>
                <h1 style={{color:'#000000ad'}}>Available Currencies</h1>
                <Table dataSource={dataSource}  >
                <Column className='centered' title="Currency" dataIndex="currency" key="currency" />
                <ColumnGroup title="Conversion Rates">
                    <Column title="fty" dataIndex="fty" key="fty" />
                    <Column title="xdt" dataIndex="xdt" key="xdt" />
                    <Column title="cdt" dataIndex="cdt" key="cdt" />
                </ColumnGroup>
                </Table>
            </div>           
        </div>
    }
}
const mapStateToProps = state=> ({
    currenciesList: state.currencies.currenciesList
})
const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators({
        getCurrenciesList : getCurrenciesList,
    },dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Currencies)