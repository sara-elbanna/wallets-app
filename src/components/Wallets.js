import React from 'react';
import { getListOfWallets, deleteWallet } from '../store/actions/walletsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons';
import CreateWalletModal from './CreateWalletModal';
import TransferFundsModal from './TransferFundsModal';

 class Wallets extends React.Component{
    state={
        showCreateWalletModal: false,
        showTransferModal: false
    }

    componentDidMount(){
        this.props.getListOfWallets()
    }
    handleDeleteWallet =(id)=>{
        this.props.deleteWallet(id)
    }
    render(){
        let dataSource = [...this.props.walletsList]
        dataSource.map((item,index) =>{
            item.key = index
            if(item.tags && item.tags.length > 0){
                item.tags_ = item.tags.join(', ')
            }
            
        })
          
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                render: id=>  <Link to = {'/showWallet/'+ id}>{id}</Link>
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
              title: 'Balance',
              dataIndex: 'balance',
              key: 'balance',
            },
            {
              title: 'Currency',
              dataIndex: 'currency',
              key: 'currency',
            },
            {
                title: 'Tags',
                dataIndex: 'tags_',
                key: 'tags_',
            },
            {
                title: '',
                dataIndex: 'transfer',
                key: 'transfer',
                render: (text, item)=> <Button onClick={()=> this.setState({showTransferModal: true, senderAddress: item.address})}>Transfer</Button>
            },
            {
                title: '',
                dataIndex: 'actions',
                key: 'actions',
                render: (text, item)=> <span style={{cursor:'pointer'}} onClick={()=>this.handleDeleteWallet(item.id)}><DeleteOutlined /></span>
            }
        ];
          
        return <div className='wallets'>
            <div className='container'>
                
                <div >
                    <h1 style={{color:'#000000ad', display:'inline-block', marginBottom:0}}>Wallets</h1>
                    <Button style={{ float:'right'}} onClick={()=> this.setState({showCreateWalletModal: true})}>Create Wallet</Button>
                </div>

                <Table size={'middle'} dataSource={this.props.walletsList} columns={columns} />
                {this.state.showCreateWalletModal && <CreateWalletModal onClose={()=> this.setState({showCreateWalletModal: false})}/>}
                {this.state.showTransferModal && <TransferFundsModal senderAddress={this.state.senderAddress} onClose={()=> this.setState({showTransferModal: false, senderAddress:''})}/>}
            </div>           
        </div>
    }
}
const mapStateToProps = state=> ({
    walletsList: state.wallets.walletsList
})
const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators({
        getListOfWallets : getListOfWallets,
        deleteWallet: deleteWallet
    },dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Wallets)