import Head from 'next/Head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicle } from '../../store/actions/branchesAction';
import { vehicleStateProps, vehicleProps } from '../../utils/interface';

import { Container, SubTitle } from './styles';

export default function Result() {
  const dispatch = useDispatch();

  const { vehicle }: vehicleProps = useSelector((state : vehicleStateProps) => state.vehicle);

  useEffect(() => {
    dispatch(fetchVehicle(vehicle));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const { price }: vehicleProps = useSelector((state : vehicleStateProps) => state.vehicle);

  console.log(price);

  return (
    <Container>
      <Head>
        <title>Resultado - Tabela Fipe</title>
      </Head>
      <h1>Tabela Fipe: Preço {price.Marca} {price.Modelo} {price.AnoModelo}</h1>
      <SubTitle><p>{price.Valor}</p></SubTitle>
      <small>Este é o preço de compra do veículo</small>
    </Container>
  );
}