import React from 'react';
import { Modal, Input, Select } from 'antd';
import _map from 'lodash/map'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getListOfWallets } from '../store/actions/walletsActions';
import { transferFunds } from '../store/actions/currenciesActions';


class TransferFundsModal extends React.Component{
    state={
        id:'',
        currency:'',
        tags:{},
        tags_value:'',
    }
    componentDidMount(){
        this.props.getListOfWallets()
    }
    handleChangeInput = (type, e)=>{
        this.setState({[type]: e.target.value})
    }
    handleChangeSelect = (type, e)=>{
        this.setState({[type]: e})
    }
    handleTransferFunds=()=>{
        console.log('state',this.state)

        let data = {
            "sender": this.props.senderId,
            "receiver": this.state.receiver,
            "amount": this.state.amount
        }
        console.log('dataa',data)
        this.props.transferFunds(data)
        this.props.onClose()
    }

    render(){  
        return <Modal
            title="Transfer Funds"
            visible={true}
            onOk={this.handleTransferFunds}
            onCancel={this.props.onClose}
            className='modal'
        >
            <div className='formGroup'>
                <span>Amount</span>
                <Input value={this.state.amount} type='number' placeholder='Amount' onChange={(e)=>this.handleChangeInput('amount',e)}/>
            </div>
            <div className='formGroup'>
                <span>Transfer to:</span>
                <Select style={{display:'block'}} onChange={(e)=>this.handleChangeSelect('receiver',e)}>
                    {this.props.walletsList.map (wallet =>{
                        return <Select.Option key={wallet.id} value={wallet.id}>{wallet.id}</Select.Option>
                    })}
                </Select>
            </div>
           
        </Modal>
    }
}
const mapStateToProps = state=> ({
    walletsList: state.wallets.walletsList
})
const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators({
        getListOfWallets: getListOfWallets,
        transferFunds: transferFunds
    },dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(TransferFundsModal)
