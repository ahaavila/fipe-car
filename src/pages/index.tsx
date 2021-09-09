import { Container, SubTitle, SearchDiv, LinkButton } from '../../styles/home';
import Head from 'next/Head';
import { connect, useDispatch, useSelector } from "react-redux";
// import { getBranches } from '../states/state';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useFipe } from '../hooks/useFipe';
import Select from '../components/select';
import { fetchBranches, fetchModels, fetchYears } from '../store/actions/branchesAction';

// interface HomeStateProps {
//   isGettingBranches: boolean,
//   branchesList: Array<any>,
// }

// interface HomeDispatchProps {
//   getBranches: typeof getBranches
// }

// interface HomeProps extends HomeDispatchProps { }

export default function Home() {
  const [newBranch, setNewBranch] = useState();
  const [newModel, setNewModel] = useState();
  const [newYear, setNewYear] = useState();

  const dispatch = useDispatch();
  const { branches } = useSelector(state => state.vehicle);
  const { models } = useSelector(state => state.vehicle);
  const { years } = useSelector(state => state.vehicle);
  
  useEffect(() => {
    dispatch(fetchBranches());
  }, []);

  useEffect(() => {   
    if (newBranch !== undefined) {
      dispatch(fetchModels(newBranch));
    }
  }, [newBranch]);

  useEffect(() => {
    if (newModel !== undefined) {
      dispatch(fetchYears(newBranch, newModel));
    }
  }, [newModel]);
  
  return (
    <Container>
      <Head>
        <title>Consulta - Tabela Fipe</title>
      </Head>
      <h1>Tabela Fipe</h1>
      <SubTitle>Consulte o valor de um veículo de forma gratuita</SubTitle>
      <SearchDiv>
        <Select selectLabel="Marca" selectOptions={branches ? branches : []} handleChange={(event: any, newValue)=> {setNewBranch(newValue.codigo)}}/>
        <Select selectLabel="Modelo" selectOptions={models ? models : []} handleChange={(event: any, newValue) => {setNewModel(newValue.codigo)}}/>
        <Select selectLabel="Ano" selectOptions={years ? years : []} handleChange={(event: any, newValue) => {setNewYear(newValue.codigo)}}/>
        <Link href="/result">
          <LinkButton>Consultar preço</LinkButton>
        </Link>
      </SearchDiv>
    </Container>
  )
}