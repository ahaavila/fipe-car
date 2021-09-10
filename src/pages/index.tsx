/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, SubTitle, SearchDiv, LinkButton } from '../../styles/home';
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Select from '../components/select';
import { fetchBranches, fetchModels, fetchYears, setVehicle, fetchVehicle } from '../store/actions/branchesAction';
import { vehicleType } from '../utils/interface';

interface stateProps {
  branches: [{
    nome: string,
    codigo: number,
  }],
  models: [{
    nome: string,
    codigo: number,
  }],
  years: [{
    nome: string,
    codigo: number,
  }]
}

interface vehicleStateProps {
  vehicle: stateProps
}

export default function Home() {
  const [newBranch, setNewBranch] = useState<vehicleType>();
  const [newModel, setNewModel] = useState<vehicleType>();
  const [newYear, setNewYear] = useState<vehicleType>();

  const dispatch = useDispatch();
  const { branches }: stateProps = useSelector((state: vehicleStateProps) => state.vehicle);
  const { models }: stateProps = useSelector((state: vehicleStateProps) => state.vehicle);
  const { years }: stateProps = useSelector((state: vehicleStateProps) => state.vehicle);
  
  useEffect(() => {
    dispatch(fetchBranches());
  }, []);

  useEffect(() => {   
    if (newBranch !== undefined) {
      dispatch(fetchModels(newBranch.codigo));
    }
  }, [newBranch]);

  useEffect(() => {
    if (newModel !== undefined) {
      dispatch(fetchYears(newBranch.codigo, newModel.codigo));
    }
  }, [newModel]);

  useEffect(() => {
    if (newYear !== undefined) {
      const data = {
        brand: newBranch,
        model: newModel,
        year: newYear,
      }
      dispatch(setVehicle(data))
    }
  }, [newYear]);
  
  return (
    <Container>
      <Head>
        <title>Consulta - Tabela Fipe</title>
      </Head>
      <h1>Tabela Fipe</h1>
      <SubTitle>Consulte o valor de um veículo de forma gratuita</SubTitle>
      <SearchDiv>
        <Select selectLabel="Marca" selectOptions={branches} handleChange={(event: any, newValue)=> {setNewBranch(newValue)}}/>
        <Select selectLabel="Modelo" selectOptions={models} handleChange={(event: any, newValue) => {setNewModel(newValue)}}/>
        <Select selectLabel="Ano" selectOptions={years} handleChange={(event: any, newValue) => {setNewYear(newValue)}}/>
        <Link href="/result">
          <LinkButton>Consultar preço</LinkButton>
        </Link>
      </SearchDiv>
    </Container>
  )
}