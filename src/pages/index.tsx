import { Container, SubTitle, SearchDiv, LinkButton } from '../../styles/home';
import Head from 'next/Head';
import { connect } from "react-redux";
import { getBranches } from '../states/state';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useFipe } from '../hooks/useFipe';
import Select from '../components/select';

interface HomeStateProps {
  isGettingBranches: boolean,
  branchesList: Array<any>,
}

interface HomeDispatchProps {
  getBranches: typeof getBranches
}

interface HomeProps extends HomeDispatchProps { }

function Home<HomeProps>() {
  const [branchs, setBranchs] = useState();
  const [newBranch, setNewBranch] = useState();
  const [models, setModels] = useState();
  const [newModel, setNewModel] = useState();
  const [years, setYears] = useState();
  const [newYear, setNewYear] = useState();

  // const { veiculo, searchBranches } = useFipe();

  // useEffect(() => {
  //   searchBranches();
  // });

  console.log(veiculo);
  
  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'https://parallelum.com.br/fipe/api/v1/carros/marcas',
  //   })
  //     .then(response => {
  //       setBranchs(response.data);
  //     })
  // }, []);

  // useEffect(() => {    
  //   if (newBranch !== undefined) {
  //     axios({
  //       method: 'get',
  //       url: `https://parallelum.com.br/fipe/api/v1/carros/marcas/${newBranch}/modelos`,
  //     })
  //       .then(response => {
  //         setModels(response.data.modelos);
  //       })
  //   }
  // }, [newBranch]);

  // useEffect(() => {    
  //   if (newModel !== undefined) {
  //     axios({
  //       method: 'get',
  //       url: `https://parallelum.com.br/fipe/api/v1/carros/marcas/${newBranch}/modelos/${newModel}/anos`,
  //     })
  //       .then(response => {
  //         setYears(response.data);
  //       })
  //   }
  // }, [newModel]);
  
  return (
    <Container>
      <Head>
        <title>Consulta - Tabela Fipe</title>
      </Head>
      <h1>Tabela Fipe</h1>
      <SubTitle>Consulte o valor de um veículo de forma gratuita</SubTitle>
      <SearchDiv>
        <Select selectLabel="Marca" selectOptions={branchs ? branchs : []} handleChange={(event: any, newValue)=> {setNewBranch(newValue.codigo)}}/>
        <Select selectLabel="Modelo" selectOptions={models ? models : []} handleChange={(event: any, newValue) => {setNewModel(newValue.codigo)}}/>
        <Select selectLabel="Ano" selectOptions={years ? years : []} handleChange={(event: any, newValue) => {setNewYear(newValue.codigo)}}/>
        <Link href="/result">
          <LinkButton>Consultar preço</LinkButton>
        </Link>
      </SearchDiv>
    </Container>
  )
}

// const mapStateToProps = ({ state }) => ({
//   isGettingBranches: state.isGettingBranches,
//   branchesList: state.branchesList 
// })

export default connect(Home);