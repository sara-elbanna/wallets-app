
import  React  from 'react';
import apiRequests from '../api/apiRequests';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Descriptions } from 'antd';

class ShowWallet extends React.Component{
    state = {
        walletDetails:{}
    }
    componentDidMount(){
        console.log('eee',this.props)
        let walletId = this.props.match.params.id
        apiRequests.showWalletDetails(walletId).then(res=>{
            this.setState({walletDetails: res.data})
        })
    }
    render(){
        if( !this.state.walletDetails ) return <span>Loading...</span>
        let wallet = this.state.walletDetails
        return <div>
            <div className='container'>
                <h1 style={{color:'#000000ad'}}>Wallet Details</h1>
                <Descriptions  bordered>
                    <Descriptions.Item label="ID" span={2}>{wallet.id} </Descriptions.Item>
                    <Descriptions.Item label="Address" span={2}>{wallet.address}</Descriptions.Item>
                    <Descriptions.Item label="Balance" span={2}>{wallet.balance}</Descriptions.Item>
                    <Descriptions.Item label="Currency" span={2}>{wallet.currency}</Descriptions.Item>
                    <Descriptions.Item label="Tags" span={3}>
                        {wallet.tags && wallet.tags.map(tag=>{
                            return <span>{tag}</span> 
                        })}
                    </Descriptions.Item>
                </Descriptions>
            </div>         
        </div>
    }
}


export default withRouter((ShowWallet))

