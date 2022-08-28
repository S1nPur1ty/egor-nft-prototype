import { action, computed, makeObservable, observable } from 'mobx';
import Web3 from 'web3';
import axios from 'axios';
import { BNB_TESTNET } from '../../constants/main.constant';
import { ContractResultModel } from './models/contract.model';

export enum State {
  IDLE,
  LOADING,
  CREATE,
  DEPLOY,
  MINT,
  COMPLETE
}

export class HomeViewModel {

  state = State.CREATE;
  contractResult?: ContractResultModel;

  constructor() {
    makeObservable( this, {
      state: observable,
      contractResult: observable,
      onCreateContract: action
    } );
  }

  setState( state: State ) {
    this.state = state;
  }

  public async onCreateContract( toast: () => void ): Promise<void> {
    try {
      this.setState(State.LOADING);

      const givenProvider = Web3.givenProvider;
      const web3 = new Web3(givenProvider);
      const networkType = await web3.eth.net.getNetworkType();
      const id = await web3.eth.net.getId();

      if( networkType !== 'private' || web3.utils.toHex(id) !== BNB_TESTNET.chainId ) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [ BNB_TESTNET ],
        })
      } 

      const data = {
        "key": "3JqwNa5TXjIz1cUdXUhj1CAlZv4BZNFD",
        "chain_id": 97,
        "name": "One Shot",
        "short_name": "OSHOT"
      }

      const options = {
        method: 'POST',
        url: 'https://thentic.p.rapidapi.com/nfts/contract',
        data,
        headers: {
          'X-RapidAPI-Key': 'a8e862e69dmsh9d0558219efa998p13efb6jsnc2e54f0dc780',
          'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        }
      };
      
      const response = await axios.request(options);

      if( response !== null ) {
        this.contractResult = response.data;
      }

      toast();
      this.setState(State.DEPLOY);

    } catch (error) {
      throw error;
    }
  }

  public onDeploy() {
    setTimeout( () => this.setState(State.MINT), 3000 );
  }

  public async onMint( contractAddress: string, toast: () => void ): Promise<void> {
    try {

      if( !contractAddress ) return;

      const givenProvider = Web3.givenProvider;
      const web3 = new Web3(givenProvider);
      const networkType = await web3.eth.net.getNetworkType();
      const id = await web3.eth.net.getId();

      if( networkType !== 'private' || web3.utils.toHex(id) !== BNB_TESTNET.chainId ) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [ BNB_TESTNET ],
        })
      }

      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0]; 

      const data = {
        "key": "3JqwNa5TXjIz1cUdXUhj1CAlZv4BZNFD",
        "chain_id": 97,
        "contract": contractAddress,
        "nft_id": 1,
        "nft_data": "Hello Web3",
        "to": account
      }

      console.log(data);
      

      const options = {
        method: 'POST',
        url: 'https://thentic.p.rapidapi.com/nfts/mint',
        data,
        headers: {
          'X-RapidAPI-Key': 'a8e862e69dmsh9d0558219efa998p13efb6jsnc2e54f0dc780',
          'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        }
      };
      
      const response = await axios.request(options);

      if( response !== null ) {
        this.contractResult = response.data;
      }
      
      toast();
      this.setState(State.COMPLETE);

    } catch (error) {
      throw error;
    }
  }
}

export const HomeViewModelInstance = new HomeViewModel();