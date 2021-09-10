export interface vehicleType {
  nome: string;
  codigo: string;
}

export interface vehicleInterface {
  brand: vehicleType,
  model: vehicleType,
  year: vehicleType
}

export interface vehicleProps {
  vehicle: {
    brand: vehicleType,
    model: vehicleType,
    year: vehicleType
  }
  price: {
    Marca: string,
    Modelo: string,
    AnoModelo: number,
    Valor: string
  }
}

export interface vehicleStateProps {
  vehicle: vehicleProps
}