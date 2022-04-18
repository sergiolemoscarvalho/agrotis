import React from 'react';
import  { Container, Paper, Typography, TextField, Button, Grid, AppBar}  from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { SingleSelect } from "react-select-material-ui";
import DateFnsUtils from "@date-io/date-fns";
import { Alert } from 'react-alert'
import './App.css'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

  const  MathRandomId = function() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
    
  }

 const Form = ({ handleClose }) => {
  const { handleSubmit, control } = useForm({
    
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    alert("Formulário Enviado")
    
   

  };
  const defaultValues = {
    infosPropriedade: "Propriedade",
    laboratorio: "Laboratório"
  };


const agrotis1 = React.createElement('h5',{className: 'owner'},'Agrotis 1');
const agrotis2 = React.createElement('h5',{className: 'owner'},'Agrotis 2');
const agrotis3 = React.createElement('h5',{className: 'owner'},'Agrotis 3');
const agrotis4 = React.createElement('h5',{className: 'owner'},'Agrotis 4');

const cnpj1 = React.createElement('span',{className: 'owner-doc'},'CNPJ 04.909.987/0001-89');
const cnpj2 = React.createElement('span',{className: 'owner-doc'},'CNPJ 04.909.987/0001-88');
const cnpj3 = React.createElement('span',{className: 'owner-doc'},'CNPJ 04.909.987/0001-87');
const cnpj4 = React.createElement('span',{className: 'owner-doc'},'CNPJ 04.909.987/0001-86');

let optionLabel1 = [agrotis1, cnpj1];
let optionValue1 = [{ id: MathRandomId(), nome:'Nome Exemplo da Fazenda'},{ 'cnpj':'04.909.987/0001-89',},];

let optionLabel2 = [agrotis2, cnpj2];
let optionValue2 = [{ id: MathRandomId(), nome:'Nome Exemplo da Fazenda'},{ 'cnpj':'04.909.987/0001-88',},];

let optionLabel3 = [agrotis3, cnpj3];
let optionValue3 = [{ id: MathRandomId(), nome:'Nome Exemplo da Fazenda'},{ 'cnpj':'04.909.987/0001-87',},];

let optionLabel4 = [agrotis4, cnpj4];
let optionValue4 = [{ id: MathRandomId(), nome:'Nome Exemplo da Fazenda'},{ 'cnpj':'04.909.987/0001-86',},];

let optionLabel5 = ['Agro Skynet '];
let optionValue5 = [{ id: MathRandomId(), nome:'Agro Skynet '},];

let optionLabel6 = ['Umbrella Agro '];
let optionValue6 = [{ id: MathRandomId(), nome:'Umbrella Agro '},];

let optionLabel7 = ['Osborn Agro '];
let optionValue7 = [{ id: MathRandomId(), nome:'Osborn Agro '},];



  
  const options = [
   
    {
      'value':optionValue1,
      'label': optionLabel1
    },
    {
      'value':optionValue2,
      'label': optionLabel2
    },
    {
      'value':optionValue3,
      'label': optionLabel3
    },
    {
      'value':optionValue4,
      'label': optionLabel4
    },
    
    
  ];
  const optionsLab = [
   
    {
      'value':optionValue5,
      'label': optionLabel5
    },
    {
      'value':optionValue6,
      'label': optionLabel6
    },
    {
      'value':optionValue7,
      'label': optionLabel7
    },
     
    
  ];

  // const CHARACTER_LIMIT = 20;
  // const [values, setValues] = useState({
  //   name: ""
  // });
  // // const [characterCount, setCharacterCount] = useState()

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  //   console.log(values.name)
  // };
  return (
    <>

    <Container maxWidth="lg">
  
      <Paper style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "none",
      }}>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} >
              <Grid item xs={6 }>
              <Typography className='title'>
                <h2>Teste front-end</h2>
                </Typography>
               </Grid> 
              <Grid item xs={6 } className='boxButton'>
                <Button type="submit" variant="standard">
                  SALVAR
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="Nome"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      fullWidth
                      label="Nome"
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: 'Preencha seu nome' }}
                />
              </Grid>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  name="DataInicial"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <KeyboardDatePicker
                      margin="0"
                      defaultValue={new Date()}
                      id={`date-${Math.random()}`}
                      label="Data Inicial*"
                      format="dd/MM/yyyy"
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                      value={value}
                      onChange={onChange}
                      renderInput={(error) => (
                        <TextField
                        
                          {...error}
                          helperText={error ? error.message : null}
                        />
                      )}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  name="DataFinal"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <KeyboardDatePicker
                      margin="0"
                      defaultValue={new Date()}
                      id={`date-${Math.random()}`}
                      label="Data Final*"
                      format="dd/MM/yyyy"
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                      value={value}
                      onChange={onChange}
                      renderInput={(error) => (
                        <TextField
                        
                          {...error}
                          helperText={error ? error.message : null}
                        />
                      )}
                    />
                  )}
                />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="infosPropriedade"
                  control={control}
                  defaultValue=""
                  
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <SingleSelect
                    
                      options={options}
                      label="Propriedades*"
                      // onChange={value => {
                      //   setValue("propriedade", value);
                      // }}
                      onChange={onChange}
                      defaultValue={defaultValues.propriedade}
                      SelectProps={{
                        isCreatable: true,
                        isClearable: true,
                        isSearchable: true
                      }}
                      />
                     
                  )}
                  
                  
                />
               
                
              </Grid>
              <Grid item xs={6}>
              <Controller
                  name="Laboratório"
                  control={control}
                  defaultValue="Laboratório"
                  
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <SingleSelect
                      label="Laboratório"
                      options={optionsLab}
                      
                      onChange={onChange}
                      defaultValue={defaultValues.laboratorio}
                      SelectProps={{
                        isCreatable: true,
                        isClearable: true,
                        isSearchable: true
                      }}
                      />
                  )}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="Observações"
                  control={control}
                  render={({ field: { onChange, value }}) => (
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      label="Observações"
                      variant="standard"
                      value={value}
                      
                     
                      // inputProps={{
                      //   maxlength: CHARACTER_LIMIT
                      // }}
                      
                      onChange={onChange}
                      // onChange = {(e) => setCharacterCount(e.target.value.length)}
                      // helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                      // helperText={`${characterCount}/${CHARACTER_LIMIT}`}
                      />
                    
                  )}
                  
                />
                
              </Grid>
    </Grid>
     
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default Form;