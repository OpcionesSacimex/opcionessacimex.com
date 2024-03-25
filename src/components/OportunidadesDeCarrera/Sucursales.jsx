import { useEffect } from 'react';
import {RadioGroup, Radio} from '@nextui-org/react';

const Sucursales = ({ branches, setSucursalSeleccionada, setNombreSucursal, jobVacancies, setBranches }) => {
  useEffect(() => {
    setSucursalSeleccionada(branches[0].idSucursal);
    setNombreSucursal(branches[0].sucursalName);
    pickBranches();
  }, []);

  const handleChange = value => {
    let tempArray = branches.find(item => item.idSucursal === value);
    setSucursalSeleccionada(value);
    setNombreSucursal(tempArray.sucursalName);
  };

  const pickBranches = () => {
    let tempArray = branches.filter(itemBranch =>
      jobVacancies.some(itemVacancie => itemVacancie.idSucursal === itemBranch.idSucursal)
    );

    setBranches(tempArray);
  };

  return(
    <RadioGroup
      label='Selecciona una sucursal'
      color='warning'
      defaultValue={branches[0].idSucursal}
    >
      {branches.map(item => (
        <Radio
          key={item.idSucursal}
          value={item.idSucursal}
          description={item.sucursalZone}
          onChange={ev => handleChange(ev.target.value)}
        >
          {item.sucursalName}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default Sucursales;