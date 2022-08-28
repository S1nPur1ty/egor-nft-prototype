import { HomeContainer, Button, LinkButton, TextInput, Title } from "./Home.style";
import { HomeViewModel, State } from './Home.viewmodel'
import { FC, useState } from "react";
import { observer } from 'mobx-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface HomeViewModelProps {
  viewModel: HomeViewModel
}

export const Home: FC<HomeViewModelProps> = observer( ( { viewModel } ) => {
  
  const [contractAddress, setContractAddress] = useState<string>();
  const contractResult = viewModel.contractResult?.transaction_url;

  return (
    <>
      <ToastContainer />
      <HomeContainer>

      { viewModel.state === State.LOADING && <p>Loading...</p> }

      { viewModel.state === State.CREATE &&
        !contractResult &&
            <Button onClick={ () => {
              viewModel.onCreateContract( () => {toast( 'Contract Created!' )} );
            } }>{ 'Create Your Contract'}</Button>
      }

      { viewModel.state === State.DEPLOY && contractResult &&
        <>
          <LinkButton onClick={() => viewModel.onDeploy()} target="_blank" href={contractResult} rel="noopener noreferrer">Deploy Your Contract</LinkButton>
        </>
      }

      { viewModel.state === State.MINT &&
        <>
            <TextInput
              onChange={ e => { setContractAddress( e.currentTarget.value ) } }
              type="text" placeholder="Contract Address*"
            />

            <Button onClick={ () => {
              if( contractAddress ) viewModel.onMint( contractAddress, () => { toast( 'NFT Minted!' ) } );
            } }>{ 'Mint NFT'}</Button>
          </>
      }

      { viewModel.state === State.COMPLETE &&
        <>
          <Title>You have succesfully, created, deployed and minted an NFT!</Title>
          <p style={{ textAlign: 'center' }}>Please check your browser console for more info</p>
        </>
      }
      </HomeContainer>
    </>
  )

} );