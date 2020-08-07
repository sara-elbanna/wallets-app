import React from 'react';
import { Modal, Input, Tag, Select } from 'antd';
import _map from 'lodash/map'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createWallet } from '../store/actions/walletsActions';
import { getCurrenciesList } from '../store/actions/currenciesActions';

class CreateWalletModal extends React.Component{
    state={
        id:'',
        currency:'',
        tags:{},
        tags_value:'',
    }
    componentDidMount(){
        this.props.getCurrenciesList()
    }
    handleChangeInput = (type, e)=>{
        this.setState({[type]: e.target.value})
    }
    handleChangeSelect = (type, e)=>{
        this.setState({[type]: e})
    }
    handleCreateNewWallet=()=>{
        console.log('state',this.state)
        let tags = []
        _map(this.state.tags, (val,key)=>{
            tags.push(val)
        })
        if(this.state.tags_value) tags.push(this.state.tags_value)
        let data = {
            "id": this.state.id,
            "currency": this.state.currency,
            "tags": tags
        }
        console.log('dataa',data)
        this.props.createNewWallet(data)
        this.props.onClose()
    }
    handleTagsChange=(val)=>{
        let list = {...this.state.tags}
        if(val[val.length-1] ==',' && val.length != 1){ 
            const index = Object.keys(this.state.tags).length  
            const _tag = val.replace(/,/g,'')
            list[index] = _tag
                this.setState({tags:list, tags_value:''})  
        }
        else{
            this.setState({ tags_value:val})  
        }
        
    }
    removeTag =(index)=>{
        let list = {...this.state.tags}
        delete list[index]
        this.setState({tags: list})
    }
    render(){
       
       
        return <Modal
            title="Create New Wallet"
            visible={true}
            onOk={this.handleCreateNewWallet}
            onCancel={this.props.onClose}
            className='modal'
        >
            <div className='formGroup'>
                <span>ID</span>
                <Input value={this.state.id} type='text' placeholder='ID' onChange={(e)=>this.handleChangeInput('id',e)}/>
            </div>
            <div className='formGroup'>
                <span>Currency</span>
                <Select style={{display:'block'}} onChange={(e)=>this.handleChangeSelect('currency',e)}>
                    {_map(this.props.currenciesList, (val,key) =>{
                        return <Select.Option key={key} value={key}>{key}</Select.Option>
                    })}
                </Select>
            </div>
            <div className='formGroup'>
                <span>Tags</span>
                <Input 
                    value={this.state.tags_value}
                    placeholder={'Separate multiple tags by commas'} 
                    onChange={(e)=>this.handleTagsChange(e.target.value)}
                />
                <div className='tags'>   
                    {_map(this.state.tags ,(val,key)=>{
                        return <Tag key={key} color='#079B97' closable onClose={()=>this.removeTag(key)}>
                                    {val}
                                </Tag>
                    })}
                </div>     
            </div>
           

        </Modal>
    }
}
const mapStateToProps = state=> ({
    currenciesList: state.currencies.currenciesList
})
const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators({
        createNewWallet: createWallet,
        getCurrenciesList : getCurrenciesList
    },dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateWalletModal)
